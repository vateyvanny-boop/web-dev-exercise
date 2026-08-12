document.addEventListener("DOMContentLoaded",function() {
	const placeInput = document.getElementById("place");
	const form = document.getElementById("travelForm");
	const placeError = document.getElementById("errorplace");
	const BestSeasonButtons = document.getElementsByName("Best-season");
	const BestSeasonError = document.getElementById("bestseasonError");
	const reasonError = document.getElementById("ReasonError");
	const provinceError = document.getElementById("provinceError");
	const dateError = document.getElementById("dateError");
	const reasonInput = document.getElementById("Reason");
	const provinceInput = document.getElementById("province");
	const inputdate = document.getElementById("input-date");
	function validateplace() {
		if (placeInput.value.trim()=== "") {
			placeError.textContent = "place is required.";
			return false;
		} else {
			placeError.textContent = "";
			return true;
		}
	}

	placeInput.addEventListener("blur", validateplace);

	form.addEventListener("submit", function(event){
		const isValid = validateplace();
		if (!isValid) {
			event.preventDefault(); //stop submit
		}
		
	
	});
	function validatBestseason() {
		let checkedBestseason =document.querySelector("input[name='Best-season']:checked");
		if (checkedBestseason === null) {
			BestSeasonError.textContent = "bestseason is required.";
			return false;
		} else {
		BestSeasonError.textContent = "";
		return true;
		

		}

	}
    BestSeasonButtons.forEach(radioButton => {
		radioButton.addEventListener('blur', validatBestseason);
	});
	function validatereason() {
		if (reasonInput.value.trim() ==="") {
			reasonError.textContent = "reason is required";
			return false;
		} else {
			reasonError.textContent = "";
			return true;
		}
	}
	reasonInput.addEventListener('blur', validatereason);
	function validateprovince() {
		if (provinceInput.value === "") {
			provinceError.textContent = "province is required";
			return false;
		} else {
			provinceError.textContent = "";
			return true;
		}
	}

	provinceInput.addEventListener('blur', validateprovince);
	function validateinputdate() {
		if (!inputdate.validity.valid) {
			dateError.textContent ="invalid date.";
			return false;
		} else {
			dateError.textContent ="";
			return true;

		}
	}
	inputdate.addEventListener('blur' , validateinputdate);

});