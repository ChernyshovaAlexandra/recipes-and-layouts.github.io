
function Recipes(){
	this.menuItem = document.getElementsByClassName('menu-item');
	this.init();
};

Recipes.prototype.init = function () {
	this.action();
};

Recipes.prototype.action = function(){
	let _this = this;
	for(let i =0; i < this.menuItem.length; i++){
		_this.menuItem[i].addEventListener('click', function (e) {
			e.preventDefault();
			Array.prototype.filter.call(_this.menuItem, function(item){
				item.classList.remove('active');
			});
			_this.menuItem[i].classList.add('active');
		});

	}
};




window.onload = function() {
   new Recipes();
};