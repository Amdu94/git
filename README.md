# Mastering GIT Workshop

You will learn in this workshop:

- How to create and work in a separate branch in GIT.
- How you can update your feature branch with the changes from other branch.
- How you can resolve merge conflicts during updates.

## Prepare the repo

**First, follow the instructions from [prepare.md](prepare.md)**

## Tasks

- Form pairs. Two students will working with each other. 
- One git repo is needed for two students.

### 1. Creating a pull request

- Your task is to extend our command line application to show a list of pets.

Student A:
- You will be working in the `pets.js` file.
- Create a new branch from the main and check it out.
- Open the file, and implement the given task in it. Try it out.
- Add and commit your changes and push it to GitHub.
- Open a Pull Request (PR) in GitHub.

Student B:
- Add some comments to the PR and request a change. (CR / Change Request)

Student A:
- Add an additional commit to your branch with the changes.

Student B:
- Approve and merge the PR.

### 2. Update your project with main

- Your task is to implement two features in parallel. Update your feature branch with
the main branch after the other features is merged.

Student A:
- Your task will be to implement the feature described in the `calling-a-cat.js`.
- Create a new branch from main. (Still do not start implementing anything.)

Student B:
- Your task will be to implement the feature described in the `search-by-name.js`.
- Create a new branch from main. 
- Implement your task in one or more commit, push them and open a PR. 

Student A: (parallel)
- Implement your task in one or more commit, push them and open a PR.

Student B:
- Merge your branch (`search-by-name`) on GitHub if both PR is opened.

Student A:
- Update your main branch with the current state from GitHub.
- Update your your feature's (`calling-a-cat`) branch with the main branch by merging.
- Push the changes to GitHub.

Student B:
- Check the PR of Student A's work (`calling-a-cat`) and merge it if everything is fine.

### 3. Update your project with main, merge conflicts

- Do the same like in the previous task, but work with the `sort-by.js` both.
- Student A implement the first task, Student B implement the second task in the same file.
- Change the roles: right now Student A merge they changes first.
- When student B updating their branch with main, resolve the merge conflict.

## Background materials

- Cheat Sheet for this workshop: [cheat-sheet.md](cheat-sheet.md)

- [Atlassian's good introduction to git](https://www.atlassian.com/git/tutorials/what-is-version-control)
- [Atlassian: Saving changes](https://www.atlassian.com/git/tutorials/saving-changes)
- [Atlassian: Syncing](https://www.atlassian.com/git/tutorials/syncing)
- [Atlassian: Making a pull request](https://www.atlassian.com/git/tutorials/making-a-pull-request)
  - This material refer's to Bitbucket's (similar to GitHub) user interface, but the explanation's are correct for GitHub too.
- [Atlassian: Using branches](https://www.atlassian.com/git/tutorials/using-branches)