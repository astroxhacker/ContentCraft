import {
    FaYoutube,
    FaInstagram,
    FaTiktok,
    FaLinkedin,
    FaTwitter,
    FaBlog,
    FaBlogger,
    FaCode,
  } from "react-icons/fa";
import { FaBloggerB, FaCodeCompare } from "react-icons/fa6";
  
  export const contentTemplates = [
    {
      name: "Youtube Video Description",
      desc: "An AI tool that generate youtube video description from your information",
      category: "Youtube",
      icon: FaYoutube,
      aiPrompt:
        "Give me youtube video description Ideas based on given video description outline and title and give me result in Rich Text Editor format",
      slug: "youtube-description",
      form: [
        {
          label: "Youtube Video Description Title",
          field: "input",
          name: "niche",
          required: true,
        },
        {
          label: "Enter Video Description Outline",
          field: "textarea",
          name: "outline",
        },
      ],
    },
    {
      name: "Youtube Video Idea",
      desc: "An AI tool that generate Youtube Video Idea based on given information",
      category: "Youtube",
      icon: FaYoutube,
      aiPrompt:
        "Give me youtube video idea on given video niche & outline topic and give me result in Rich Text Editor format",
      slug: "generate-youtube-video-idea",
      form: [
        {
          label: "Enter your video niche",
          field: "input",
          name: "niche",
          required: true,
        },
        {
          label: "Enter video outline",
          field: "textarea",
          name: "outline",
        },
      ],
    },
    {
      name: "Instagram Hashtags",
      desc: "An AI tool that generate Instagram hashtags based on your post niche and outline information",
      category: "Instagram",
      icon: FaInstagram,
      aiPrompt:
        "Give me some good examples of instagram hashtags on given niche & outline topic and give me result in Rich Text Editor format",
      slug: "generate-instagram-hashtags",
      form: [
        {
          label: "Enter your post niche",
          field: "input",
          name: "niche",
          required: true,
        },
        {
          label: "Enter post outline",
          field: "textarea",
          name: "outline",
        },
      ],
    },
    {
      name: "Tiktok Hashtags",
      desc: "An AI tool that generate Tiktok topic idea based on your post niche and outline information",
      category: "Tiktok",
      icon: FaTiktok,
      aiPrompt:
        "Give me some good examples of instagram hashtags on given niche & outline topic and give me result in Rich Text Editor format",
      slug: "generate-tiktok-hashtags",
      form: [
        {
          label: "Enter your post niche",
          field: "input",
          name: "niche",
          required: true,
        },
        {
          label: "Enter post outline",
          field: "textarea",
          name: "outline",
        },
      ],
    },
    {
      name: "Linkedin Post",
      desc: "An AI tool that generate Linkedin Post idea based on your post niche and outline information",
      category: "Linkedin",
      icon: FaLinkedin,
      aiPrompt:
        "Give me some good examples of Linkedin Post idea on given niche & outline topic and give me result in Rich Text Editor format",
      slug: "generate-likedin-post",
      form: [
        {
          label: "Enter your post niche",
          field: "input",
          name: "niche",
          required: true,
        },
        {
          label: "Enter post outline",
          field: "textarea",
          name: "outline",
        },
      ],
    },
    {
      name: "Tweet",
      desc: "An AI tool that generate Linkedin Post idea based on your post niche and outline information",
      category: "Tweet",
      icon: FaTwitter,
      aiPrompt:
        "Give me 280 characters of tweet example on given niche & outline topic",
      slug: "generate-tweet-post",
      form: [
        {
          label: "Enter your tweet niche",
          field: "input",
          name: "niche",
          required: true,
        },
        {
          label: "Enter tweet outline",
          field: "textarea",
          name: "outline",
        },
      ],
    },
    {
      name: "Blog Title",
      desc: "An AI tool that generate blog title depends on your blog information",
      category: "Blog",
      icon: FaBloggerB,
      aiPrompt:
        "Give me 5 blog topic idea in bullet wise only based on given niche & outline and give me result in Rich Text editor format",
      slug: "generate-blog-title",
      form: [
        {
          label: "Enter your blog niche",
          field: "input",
          name: "niche",
          required: true,
        },
        {
          label: "Enter blog outline (Optional) ",
          field: "textarea",
          name: "outline",
        },
      ],
    },
    {
      name: "Explain Code",
      desc: "AI Model to explain programming code in any language",
      category: "Code",
      icon: FaCodeCompare,
      aiPrompt:
        "Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ",
      slug: "explain-code",
      form: [
        {
          label: "Enter code which you want to understand",
          field: "textarea",
          name: "niche",
          required: true,
        },
      ],
    },
    {
      name: "Write Code",
      desc: "AI Model to generate programming code in any language",
      category: "Code",
      icon: FaCode,
      aiPrompt:
        "'Depends on user codeDescription write a code and give output in  in rich text editor format in code block ",
      slug: "write-code",
      form: [
        {
          label: "Enter description of code you want along with Programming Lang",
          field: "textarea",
          name: "niche",
          required: true,
        },
      ],
    },{
      name: "Instagram Hash Tag Generator",
      desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
      category: "Instagram",
      icon: FaInstagram,
      aiPrompt:
        "Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format",
      slug: "insta-hash-generate",
      form: [
        {
          label: "Enter Keywords for your instagram hastag",
          field: "input",
          name: "niche",
          required: true,
        },
      ],
    },
    {
      name: "Code Bug Detector",
      desc: "This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.",
      category: "Code",
      icon: FaCode,
      aiPrompt:
        "Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block",
      slug: "code-bug-detector",
      form: [
        {
          label: "Enter code which you want to test bug",
          field: "textarea",
          name: "niche",
          required: true,
        },
      ],
    },
  ];