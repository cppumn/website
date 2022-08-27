# File Structure

All files pertaining to the website are contained within the `cpp-website` directory. Within there you will see the typical files found within a React app. Here's a brief overview of the most import folders and what they contain:

* `bin`  
    This folder contains any important scripts that are used for building or deploying the project.

* `public`  
    This folder contains all the standard files you might expect to see in a typical website such as `favicon.ico` or `manifest.json`. All the files in this folder will be deployed with the website and publicly accessible afterward.

* `src`  
    This folder contains all the code for the project, its sub folder are described below:

    * `components`  
        This folder contains all the React components for the project.

    * `css`  
        This folder contains any `.css` files used within the project. Usually styling should be done with ChakraUI, but in very few cases, writing css might be necessary.

    * `globals`  
        This folder contains any global definitions that are used throughout the project. For example, the `CPPInfo.ts` file contains any information about CPP that might be used in multiple spots throughout the site (color scheme, Discord invite, etc.). Importantly, if you want to use some info from `globals/` (such as added a Discord invite), do not copy/paste the info, instead `import` it into the file.

    * `img`  
        This folder contains any images that might be used in the site.

    * `pages`  
        This folder contains the main files for each page in the website. This folder is the place start when trying to figure out how something was implemented. 

    * `services`  
        This folder contains any custom libraries that are used within the project.

