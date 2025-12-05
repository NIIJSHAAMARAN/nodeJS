// You are helping build a simple document submission system.
//  A user will upload a file through the browser, and once the file is successfully uploaded and saved, 
// the system should automatically send a confirmation email to a friend letting them know a file was uploaded.
// Your task is to complete this workflow:
// Use the existing file upload code 
// After a file is uploaded and moved successfully, send an email.
// Display a message in the browser: "File uploaded and email sent successfully!"
const formidable=require('formidable');
const http=require("http");
const fs=require('fs');
const path=require('path');
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
            console.log(oldpath);
            console.log(newpath);

            fs.rename(oldpath,newpath,function(err)
            {
                if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('An error occurred while moving the file');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        const mailOptions = {
            from: 'youremail@gmail.com',
            to: 'yourfriend@yahoo.com',
            subject: 'How to send Email using NodeJS',
            text: 'file was uploaded!'
            };
            transport.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
            });
        res.end('File uploaded and email sent successfully!');
            });
        });
    }
    else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="/fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    res.end();
    }
}).listen(8080,()=>{console.log('Server listening on port 8080');});