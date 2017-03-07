var Nightmare = require('nightmare');
//require('nightmare-upload')(Nightmare);

var nightmare = Nightmare({show: true});

new Nightmare()
	  .goto('https://carousell.com/login/?next=/')
	  .type('input[id="username"]', 'YOUR USERNAME') // Substitute with your username
	  .type('input[id="pass"]', 'YOUR PASSWORD') // Substitute with your password
	  .click('.btn.btn-secondary.btn-block.btn-cta.login-btn')
	  .wait(3000)
	  
	  .inject('css', '/uploads/mouse.css')
	  .goto('https://carousell.com/sell/')
	  .type('#sellInfoTitle', 'Nice Mouse')
	  .type('.SellFormCategoryDropdown__dropdownTitle___291uQ', 'Electronics & Gadgets')
	  .type('#formSellPrice', '10.00')
	  .click('.btn.btn-md.btn-secondary')

	  .wait(5000)
		.screenshot('screenshot.png')
		  .run(function(err, nightmare) {
		    if (err) {
		      console.log(err);
		    }
		    console.log('Screenshot captured');
		    process.exit();
		  });
