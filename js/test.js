$(document).ready(function() {
	jQuery("body").append("<div class='output'>HELLO</div>");
	var output=jQuery(".output");
	derekTest.log("ello");
		test("A test.", function() { 
		assert(true, "First assertion completed"); 
		assert(true, "Second assertion completed"); 
		assert(true, "Third assertion completed"); 
	}); 
	test("Another test.", function() { 
		assert(true, "First test completed"); 
		assert(false, "Second test failed"); 
		assert(true, "Third assertion completed"); 
	}); 
	test("A third test.", function() { 
		assert(null, "fail"); 
		assert(5, "pass");
	}); 
});