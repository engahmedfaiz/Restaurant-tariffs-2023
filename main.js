$(document).ready(function(){
	$('#menu').click(function(){
		$(this).toggleclass('fa-times');
		$('.navbar').toggleclass('nav-toggle');
	})
	$(window).on('load scroll',function(){

		$('#menu').removeclass('fa-times');
		$('.navbar').removclass('nav-toggle');
});

	});


$('.controls .buttons').click(function(){
	$(this).addClass('button-active').siblings().removeclass('button-active');

	let filter = $(this).attr('data-filter');
	if(filter =='all'){
		$('.dish .image').show(400);

	}else{
		$('.dish .image').not('.'+filter).hide(200);
		$('dish .image').filter('.'+filter).show(400);
	}

	});
		<div class="box">
			<img src="chef2.jpg"alt="">
			<div class="info">
			<h3>john deo</h3>
			<span>head chef</span>
			<div class="share">
				<a href="#" class="fab fa-facebook-f"></a>
				 <a href="#" class="fab fa-pinterest"></a>
<a href="#" class="fab fa-instagram"></a>
<a href="#" class="fab fa-twitter"></a>
</div>
			</div>
		</div>
	</div>









		<div class="box">
			<img src="chef3.jpg"alt="">
			<h3>john deo</h3>
			<span>head chef</span>
			<div class="share">
				<a href="#" class="fab fa-facebook-f"></a>
				 <a href="#" class="fab fa-pinterest"></a>
<a href="#" class="fab fa-instagram"></a>
<a href="#" class="fab fa-twitter"></a>
</div>
			</div>
		</div>
	</div>




		<div class="box">
			<img src="chef4.jpg"alt="">
			<h3>john deo</h3>
			<span>head chef</span>
			<div class="share">
				<a href="#" class="fab fa-facebook-f"></a>
				 <a href="#" class="fab fa-pinterest"></a>
<a href="#" class="fab fa-instagram"></a>
<a href="#" class="fab fa-twitter"></a>
</div>
			</div>
		</div>
	</div>

