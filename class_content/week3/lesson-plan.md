# Week3

## Wednesday

### October-4 GitHub Exercise
1. navigate to GitHub.com (be logged in)
2. click the green button to create a new repository
   1. give it a cool name
   2. give it a README.md
3. clone your new repository to your local computer!
   * you can use ssh or https to authenticate
4. make an update to the README.md file
5. add, commit, and push the updated READE.md file

### Hosting a static website using GitHub Pages
1. Your website file must be named `index.html`
2. Add some boilerplate markup to your `index.html` file by using the `!` Emmett abbreviation.
3. Add some markup to personalize your website (this can be as simple or complex as you like)
4. push your new markup into your GitHub Repository (make sure your `index.html` file is NOT nested in a folder)
5. In your GitHub repository settings, configure GitHub Pages to serve your website from the `root` or `/` location
6. the url to check out your new website will match the following pattern:
   * `<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPO_NAME>`
  
## Thursday
### You are The New York Times
Modify the front page of your favorite website using the Chrome Developer tools. Share your creations with the rest of class

### Accessibility Challenge
Improve the Google Chrome Lighthouse accessiblity score of your website by implementing the changes that it requires.

### The Newspaper Is A Website
Create a mobile-responsive html newspaper. There should be a primary h1 heading at the top with the name of your prestigious publication. You can have 1 or many stories below. The content should flow from 3 columns to 2 columns to 1 column depending on the width of the device's viewport. Use media queries to achieve this.
* bonus points if you get a nice parchment color and texture on your background.

## Friday
### Lecture: Collaboration with Git (GitHub edition)
* create a branch
  * via cli
    * `git checkout -b <YOUR_BRANCH_NAME>`
* delete a branch
  * via cli
    * `git branch -D <YOUR_BRANCH_NAME>` // this deletes the branch on your local computer, not on GitHub
  * via [github](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)
* merging branches
  * pulling content from another branch into your branch
    * `git pull origin <BRANCH_NAME>`
  * merging your branch into another branch via a [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)

### Activity: Git collaboration group project
Elias the Intern was tasked with making a website for the local cat shelter. Unfortunately, he quit halfway through and left you to pick up the pieces! You need to work as a group to update the Cats biography pages and finish the project before the client returns from their holiday weekend in Hawaii.

#### MVP: Minimum Viable Product (the bare minimum of what you need to deliver to fulfill your contractual obligations)
##### Git/GitHub:
* establish a GitHub repository for this work
* import the starter code into the repo
* add your team members as collaborators on your team repo
* use git branches to enable group contribution to the project
##### Website:
* add biography details to each cats biography page

#### Stretch Goals (nice-to-have features or content that are secondary to the primary objectives [see: MVP])
* improve the look and feel/accessibility
  * improve contrast of the different components
  * add labels/alt text
  * use different images for each cat
  * fix/add css styling to add your touch
* Create a `Contact Us!` page and link to it on the home page
* Deploy the site! Use any method you'd like