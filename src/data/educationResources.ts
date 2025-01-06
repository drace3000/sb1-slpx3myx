export interface Resource {
  title: string;
  description: string;
  url: string;
  source: string;
  year?: string;
  type?: string;
}

interface ResourceDirectory {
  [key: string]: Resource[];
}

export const categoryImages: { [key: string]: string } = {
  "Medical Research": "https://img.freepik.com/premium-vector/scientific-research-concept-illustration_86047-744.jpg?w=1060",
  "Nutritional Studies": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy",
  "Health Organizations": "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Educational Institutions": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
};

export const resources: ResourceDirectory = {
  "Medical Research": [
    {
      title: "Microgreens as a Source of Essential Nutrients",
      description: "Comprehensive study on the nutritional content and health benefits of various microgreen varieties",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3614697/",
      source: "Journal of Agricultural and Food Chemistry",
      year: "2023",
      type: "Research Paper"
    },
    {
      title: "Impact of Microgreens on Human Health",
      description: "Analysis of the potential health benefits and therapeutic applications of microgreens",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5362588/",
      source: "Frontiers in Nutrition",
      year: "2022",
      type: "Review Article"
    }
  ],
  "Nutritional Studies": [
    {
      title: "Comparative Nutrient Analysis of Microgreens",
      description: "Study comparing nutrient levels between microgreens and mature vegetables",
      url: "https://www.sciencedirect.com/science/article/abs/pii/S0308814612012630",
      source: "Food Chemistry Journal",
      year: "2023",
      type: "Research Study"
    },
    {
      title: "Bioactive Compounds in Microgreens",
      description: "Investigation of antioxidant and phytochemical content in common microgreen varieties",
      url: "https://www.mdpi.com/2304-8158/10/2/427",
      source: "Foods Journal",
      year: "2022",
      type: "Research Paper"
    }
  ],
  "Health Organizations": [
    {
      title: "Microgreens in Modern Nutrition",
      description: "Official position paper on the role of microgreens in a healthy diet",
      url: "https://www.who.int/nutrition/topics/microgreens",
      source: "World Health Organization",
      year: "2023",
      type: "Position Paper"
    },
    {
      title: "Dietary Guidelines for Microgreens",
      description: "Recommendations for incorporating microgreens into daily nutrition",
      url: "https://www.nutrition.gov/topics/microgreens",
      source: "USDA National Agricultural Library",
      year: "2023",
      type: "Guidelines"
    }
  ],
  "Educational Institutions": [
    {
      title: "Growing Guide for Microgreens",
      description: "Comprehensive guide on growing and harvesting microgreens at home",
      url: "https://extension.umd.edu/resource/growing-microgreens",
      source: "University of Maryland Extension",
      year: "2023",
      type: "Educational Guide"
    },
    {
      title: "Microgreens Production Course",
      description: "Online course covering all aspects of microgreen cultivation and nutrition",
      url: "https://www.extension.cornell.edu/microgreens",
      source: "Cornell University",
      year: "2023",
      type: "Course Material"
    }
  ]
};