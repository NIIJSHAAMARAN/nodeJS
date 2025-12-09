//  <!-- You are helping build a Tech Support Website. Your goal is to create two basic features:

//  A form where users can upload a file (like a screenshot or log file).

//  Automatically send an email notification to the admin saying:
//  "A file has been uploaded by a user. Please check the server."
//   Complete the following:

//  Create a simple form in the browser that lets users upload a file.
// After the file is uploaded:

//  Move the file into a folder called uploads.

// Send an email to admin@example.com with subject: "File Uploaded"
// The email should contain the text: "A user uploaded a file to the support portal." -->
const http=require('http');
const fs=require('fs');
const url=require('url');
const path = require('path');
const formidable = require('formidable');
const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b1a732c2cbbef7",
    pass: "49c3d372fc8255"
  }
});
http.createServer(function(req,res)
{
    if(req.url=='/fileupload' && req.method.toLowerCase()==='post')
    {
        const form=new formidable.IncomingForm();
        form.parse(req,function(err,fiels,files)
        {
            if(err)
            {
                res.writeHead(500,{'Content-Type':'text/plain'});
                res.end('An error occurred during the file upload');
                return;
            }
            const oldpath=files.filetoupload[0].filepath;
            const newpath=path.join(process.cwd(),'uploads',files.filetoupload[0].originalFilename);
                fs.rename(oldpath, newpath, function (err) {
            if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error moving file');
            return;
            }

            const mailOptions = {
            from: 'youremail@gmail.com',
            to: 'yourfriend@yahoo.com',
            subject: 'File Uploaded',
            text: 'A user uploaded a file to the support portal.'
            };
            transport.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
            });
              res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('File uploaded and email sent successfully!');
            });
        });
    }
    
        else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>Upload a Support File</h2>');
        res.write('<form action="/fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br><br>');
        res.write('<input type="submit" value="Upload File">');
        res.write('</form>');
        res.end();
        }
}).listen(3000,()=>{console.log('Server listening on port 8080');});