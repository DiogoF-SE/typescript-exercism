# Define the directory to process
$directory = "C:\Users\diogo.fernandes\Documents\Learn\Exercism\TypeScript"

# Get a list of all subdirectories in the specified directory
$folders = Get-ChildItem -Path $directory -Directory | Select-Object -ExpandProperty Name

# Loop through each folder and execute the git commands
foreach ($folder in $folders) {
    # Execute the git commands
    & git add $folder
    & git commit -m "feat($folder): typescript solution of $folder"
    & git push --set-upstream origin master
}