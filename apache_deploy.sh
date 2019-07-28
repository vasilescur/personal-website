# Remove the existing files
rm -rf /var/www/raduvasilescu.com/*

# Copy the _site folder here to the new location
cp -rf ./_site/ /var/www/raduvasilescu.com/html/
