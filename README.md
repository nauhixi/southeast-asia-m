
name: Daily Update

on:
  schedule:
    - cron: '0 23 * * *'
  workflow_dispatch:

jobs:
  update-dashboard:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Update Timestamp
        run: |
          echo "Dashboard auto updated at $(date)" > update-log.txt

      - name: Commit Changes
        run: |
          git config --global user.name "github-actions"
          git config --global user.email "actions@github.com"
          git add .
          git commit -m "Daily dashboard update" || echo "No changes"
          git push
