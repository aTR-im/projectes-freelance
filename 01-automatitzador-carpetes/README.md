File Organizer

A lightweight Node.js script that automatically sorts files in a folder into subfolders by type. No dependencies — just Node.js.

How it works

Scans a folder and moves each file into a subfolder based on its extension:

FolderExtensions images/jpg, jpeg, png, gif, svg, webp, bmp documents/pdf, doc, docx, txt, odt, xls, xlsx, ppt, pptx audio/mp3, wav, flac, aac, ogg video/mp4, avi, mkv, mov, wmv compressed/zip, rar, 7z, tar, gz others/anything else

If a subfolder doesn't exist, it gets created automatically.

Usage

bashnode organitzador.js /path/to/folder

If no folder is specified, it organizes the folder where the script lives.

Example:

bashnode organitzador.js C:\Users\Ari\Downloads

Requirements

Node.js (any LTS version). No external libraries needed.

Use case

Ideal for automating repetitive file management tasks — downloads folders, desktop cleanup, batch document sorting for small businesses.
