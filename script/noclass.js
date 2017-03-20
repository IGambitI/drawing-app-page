var wp = (function(){

	var $sliderBox = $("#slider");

	var Slider = function($slider)
	{
		var currentSlide = 0;
		var records = null;
		var $slides = $slider.find("div").filter("#slides");

		var slides = 0
		var html = "";


		var handler = function(e)
		{
			var index = $(e.target).index();

			if (index == 2)
			{
				currentSlide++;
			}
			else
			{
				currentSlide--;
			}

			if (currentSlide > slides)
			{
				currentSlide = 0;
			}
			if (currentSlide < 0)
			{
				currentSlide = slides;
			}

			$slides.css("margin-left", -currentSlide*1100);

		}
		var loadSlides = function()
		{
				$.ajax({
					url: "/slides",
					method: "POST",
					success: function(data){
						for (var i = 0; i < data.length; i++)
						{
							html += '<div class="dane"><div class="podpis"></div><div class="data"></div><div class="ocena"></div></div>';
							html += "<img src=\""+data[i].image+"\"/>";
						}
            slides++;
						$slides.width(data.length*1100);
						$slides.html(html);
					}
				});
		}
		loadSlides();

		$slider.find("div").filter(".controll").on("click", handler);


		this.next 		= next;
		this.prev 		= prev;
		this.current 	= currentSlide;
	}

	return {
		slider: new Slider($sliderBox)
	}


})();
