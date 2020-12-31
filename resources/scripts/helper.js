function open_link(name) {
    console.log(name)
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
    else if (name == "thesplash") {
        window.open("http://jointhesplash.com/", "_blank");
    }
    else if (name == "signac") {
        window.open("http://signac.io/", "_blank");
    }
    else if (name == "gsoc") {
        window.open("http://summerofcode.withgoogle.com/", "_blank");
    }
    else if (name == "ashwinisharma") {
        window.open("https://www.iitr.ac.in/~CH/Ashwini_Kumar_Sharma", "_blank");
    }
    else if (name == "thomso") {
        window.open("https://thomso.in", "_blank");
    }
    else if (name == "smp") {
        window.open("https://smp.iitr.ac.in/", "_blank");
    }
    else if (name == "arp") {
        window.open("http://arp.iitr.ac.in/", "_blank");
    }
    else if (name == "saciitr") {
        window.open("https://sac.iitr.ac.in/", "_blank");
    }
    return false;
  }