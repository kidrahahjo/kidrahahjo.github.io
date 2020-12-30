function open_link(name) {
    if (name == 'resume') {
        window.open("resources/resume/hardik-resume.pdf", "_blank");
    }
    else if (name == "email") {
        window.open("mailto:kidrahahjo@gmail.com", "_blank");
    }
    else if (name == "linkedin") {
        window.open("https://linkedin.com/in/kidrahahjo", "_blank");
    }
    else if (name == "twitter") {
        window.open("https://twitter.com/kidrahahjo", "_blank");
    }
    else if (name == "facebook") {
        window.open("https://facebook.com/kidrahahjo", "_blank");
    }
    else{
        console.log('Invalid parameter + ' + name + 'fail');
    }
    return false;
  }