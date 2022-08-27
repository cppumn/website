# This script will be run before deployment

# # checks to ensure you are deploying on the main branch
# CURBRANCH="$(git branch --show-current)"
# if [ ${CURBRANCH} != "main" ] 
# then 
#   echo "ERROR: Must be on main branch to deploy" >> /dev/stderr
#   exit 1 
# fi

# pulls most recent changes to main
git pull origin main

# builds the build folder
npm run build
# copies the index.html contents into a 404.html file, this makes is so that the BrouserRouter works with GitHub pages
cp build/index.html build/404.html

# if we need seperate html files (Removes 404 error from existing pages):
# gets all the route data from the App.tsx file (figures out what pages need to made)
ROUTES=$(grep -oP "(?<=<Route path=[\"|']/)[A-Z|_|a-z|0-9|/]+" src/App.tsx)
# converts the route data into proper files names (i.e schedule => build/schedule.html)
FILES=$(echo ${ROUTES} | sed 's/[A-Z|_|a-z|0-9|\/]*/build\/&.html/g')
# creates each of those files, and copies the contents of index.html into them
for f in ${FILES}; do mkdir -p $(dirname ${f}) && cp build/index.html ${f}; done
