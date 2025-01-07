$(function () {  	
	snb();
	tabs(".depth4");
	tabs(".depth5");
	accordion(".accordion");
	dialogPop() //alert
	fileLoad(".file-input");
	layerPopup('#deptSearch')		//부서명 찾기

	//snb close
	listOpen('#snb .snb-close', '#snb', true)

	//통합검색-고급검색
	tabs(".total-search-cont .tabs");
	listOpen('.ico-sch1', '.sch-etc', true)

	//mdi
	$('.depth4>ul>li .ri-close-line').on('click', function(e){
		$(this).parents('li').remove();
		e.preventDefault();
	});
	$('.tab-control .mdi-all-close').on('click', function(e){
		$('.depth4').find('li:not(.active)').remove();
		mdiTab.update();
	});
	

	var mdiTab = new Swiper(".mdi-area .swiper", { 
		slidesPerView: 'auto',
		loop: this.SwiperLength > 1,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},		
		/* breakpoints: {
			1024: {
				slidesPerView: 3
			},
			1280: {
				slidesPerView: 5
			}
		} */
	}) 

	//상세검색열기
	listOpen('.filter-open', '.filter', true)

	//필터
	listOpen('.item-add', '.filter-item', false)

	



	/* //이메일 도메인 선택
	$('.domain-select').on('change', function(){
		var selDomain = $(this).val()
		$(this).prev('.domain-input').val(selDomain);
	})
	//평점신청시 선택활성화
	$('input[name="grade_yn"]').on('change', function(){
		$('[value="Y"]').is(':checked') ? $(this).parent().siblings('select').prop('disabled', false) : $(this).parent().siblings('select').prop('disabled', true);
	}) */
})


