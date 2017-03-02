var Nightmare = require('nightmare');

var nightmare = Nightmare({show: true});

new Nightmare()
	  .goto('https://carousell.com/login/?next=/')
	  .type('input[id="username"]', 'username') // Substitute with your username
	  .type('input[id="pass"]', 'password') // Substitute with your password
	  .click('.btn.btn-secondary.btn-block.btn-cta.login-btn')
	  .wait()
		.screenshot('screen.png')
		  .run(function(err, nightmare) {
		    if (err) {
		      console.log(err);
		    }
		    console.log('Screenshot captured');
		  });