npm run build
cp build/index.html build/404.html

## if we need seperate html files:
ROUTES=$(grep -oP "(?<=<Route path='/)[A-z|0-9|/]+" src/App.tsx)
FILES=$(echo ${ROUTES} | sed 's/[A-z|0-9|\/]*/build\/&.html/g')
for f in ${FILES}; do mkdir -p $(dirname ${f}) && cp build/index.html ${f}; done
