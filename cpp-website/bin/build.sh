npm run build
cp build/index.html build/404.html

## if we need seperate html files:
# ROUTES=$(grep -oP "(?<=<Route path='/)[A-z]*" src/App.tsx)
# FILES=$(echo ${ROUTES} | sed 's/[A-z]*/build\/&.html/g')
# for f in ${FILES}; do cp build/index.html ${f}; done
