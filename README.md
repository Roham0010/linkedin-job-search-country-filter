# LinkedIn job search country filter
It will hide the job item within the given filter list from the LinkedIn search result.
- This script will save the viewed jobs so you never see them again. (and also removes them from the storage automatically after 5 days from the insertion date.)
- You can filter the LinkedIn jobs list located in a specific country by adding the country to the `countriesToIgnore` array
- You can filter the LinkedIn jobs list by having a specific word in the title by adding the words to the `wordsNotToBeInTitle` array
- You can filter the LinkedIn jobs list by company name by adding the company name to the `companiesToIgnore` array
- This script also unchecks the following company on the review step of the easy apply (you can remove that section to avoid that)

## How to use it?
- Open the LinkedIn job search
- Do your search
- Open the browser developer tools (press F12 on the keyboard or from the menu -> tools select developer tools)
- Open the console tab
- Copy the code from the script.js file
- Paste the code into the Console tab and press enter
