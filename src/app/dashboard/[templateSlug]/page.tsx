"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contentTemplates } from "@/lib/content-templates";
import { Loader, LoaderPinwheel } from "lucide-react";
import { useState } from "react";
import { Editor } from "./_components/editor";
import { chatSession } from "@/lib/gemini-ai";
import axios from "axios";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
interface templateSlugProps {
  templateSlug: string;
}

const TemplatePage = ({ params }: { params: templateSlugProps }) => {
  const [isLoading, setisLoading] = useState(false);
  const [aiOutput, setAIOutput] = useState<string>("");

  const selectedTemplate = contentTemplates.find(
    (item) => item.slug === params.templateSlug
  );

  const generateAIContent = async (formData: FormData) => {
    setisLoading(true);
    try {
      let dataSet = {
        title: formData.get("title"),
        description: formData.get("description"),
      };

      const selectedPrompt = selectedTemplate?.aiPrompt;
      const finalAIPrompt = JSON.stringify(dataSet) + ", " + selectedPrompt;

      const result = await chatSession.sendMessage(finalAIPrompt);
      setAIOutput(result.response.text());

      const response = await axios.post("/api/", {
        title: dataSet.title,
        description: result.response.text(),
        templateUsed: selectedTemplate?.name,
      });
      console.log("response: " + response);
      setisLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit = async (formData: FormData) => {
    generateAIContent(formData);
  };
  return (
    <div className="mx-5 py-2 ">
      <div className=" flex justify-between items-center mt-5 py-6 px-4 bg-secondary rounded">
        <h2 className="font-medium">{selectedTemplate?.name}</h2>
        <div className="inline md:hidden cursor-pointer">

          <DropdownMenu >
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <Link href={'/dashboard'}>
                <DropdownMenuItem>
                  Home
                </DropdownMenuItem>
              </Link>
              <Link href={'/dashboard/history'}>
                <DropdownMenuItem>
                  History
                </DropdownMenuItem>
              </Link>
              <Link href={'/dashboard/upgrade'}>
                <DropdownMenuItem>
                  Upgrade
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <form action={onSubmit}>
        <div className="flex flex-col gap-4 p-5 mt-5 bg-secondary">
          {selectedTemplate?.form?.map((form) => (
            <div key={selectedTemplate.slug}>
              <label>{form.label}</label>
              {form.field === "input" ? (
                <div className="mt-5">
                  <Input name="title"></Input>
                </div>
              ) : (
                <div className="mt-5">
                  <Textarea name="description" />
                </div>
              )}
            </div>
          ))}
        </div>
        <Button variant={'destructive'} className="mt-5 " type="submit">
          {isLoading ? (
            <LoaderPinwheel className="animate-spin"></LoaderPinwheel>
          ) : (
            "Generate Content"
          )}
        </Button>
      </form>
      <div className="my-10">
        <Editor value={isLoading ? "Generating..." : aiOutput} />
      </div>
    </div>
  );
};

export default TemplatePage;