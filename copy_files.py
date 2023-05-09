import os
import shutil

projects = [
    # "react-calculator",
    # "react-clicks-counter",
    # "react-course",
    # "react-task-application",
    # "react-testimonials",
    "frontend"
]



for project in projects:
    path_source = r"D:\courses\examples\photo-gallery\\" + project
    path_destination = r"D:\courses\examples\photo-gallery\\" + project + "1"

    items = [
        "node_modules",
        "public",
        "src",
        ".gitignore",
        # "copy_files.py",
        # "notes.md",
        "package-lock.json",
        "package.json",
        "README.md"
        
        
        
    ]

    for item in items:
        complete_path_source = os.path.join(path_source,item)
        complete_path_destination = os.path.join(path_destination,item)
        
        isExist = os.path.exists(complete_path_source)
        if isExist:
            if os.path.isfile(complete_path_source):
                shutil.copy(complete_path_source, complete_path_destination)
            else:
                shutil.copytree(complete_path_source,complete_path_destination)

