import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "http://localhost:3000";

  //WITH THE DYNAMIC URL
  //const = await fetch all users
  //const userUrls=users.map(user=>{return {url:`${baseUrl}/user.id`, lasModified:user.updatedAt}})

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/users`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/todos`,
      lastModified: new Date(),
    },

    //...userUrls
  ];
}
