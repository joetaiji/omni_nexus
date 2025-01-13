
$(function () {       

/* ======================================================================================
레이아웃
====================================================================================== */
	$(window).on('resize', function(){
		$w = $(this).width();
		$w<1800 ? $('#snb').addClass(AC) :	$('#snb').removeClass(AC);

	})
	//snb
	snb();	
	listOpen('#snb .snb-close', '#snb', true)

	//mdi	
	$('.mdi-tabs .ri-close-line').on('click', function(e){
		$(this).parents('li').remove();
		e.preventDefault();
	});
	$('.mdi-all-close').on('click', function(e){
		$('.mdi-tabs').find('li:not(.active)').remove();
		mdiTab.update();
	});
	var mdiTab = new Swiper(".mdi-area .swiper", { 
		slidesPerView: 'auto',
		loop: this.SwiperLength > 1,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		}
	}) 		

/* ======================================================================================
아이템 선택 레이어 생성
====================================================================================== */
	//프로젝트 분류
	$('[data-layer="type"]').append(
		`<div class="item-layer">
			<div class="item-group">
				<span class="item">홈페이지 구축</span>
				<span class="item">유지보수</span>
				<span class="item">디자인</span>
				<span class="item">클라우드 이관</span>
				<span class="item">홍보/이벤트</span>
				<span class="item">컨설팅</span>
				<span class="item">내부거래</span>
			</div>
		</div>`
	);
	

	//사업명
	$('[data-layer="project"]').append(
		`<div class="item-layer">												
			<div class="item-group">
				<span class="item">양성자가속기 장비이력관리시스템 고도화 및 유지보수 위탁용역</span>
				<span class="item">(NIGT) 웹 기반 글로벌 R&D 전략지도 정보시스템 구축</span>
			</div>
		</div>`
	);

	//부서
	$('[data-layer="dept"]').append(
		`<div class="item-layer">			
			<div class="item-group">
				<span class="item">EX 사업부</span>
				<span class="item">MX 사업부</span>
				<span class="item">AX 연구소</span>
				<span class="item">PX 인사부</span>
				<span class="item">PX 재무회계부</span>
				<span class="item">CX 영업부</span>
				<span class="item">지최일만</span>
			</div>
		</div>`
	);

	//팀
	$('[data-layer="team"]').append(
		`<div class="item-layer">										
			<div class="item-group">
				<span class="item">기획1팀</span>
				<span class="item">기획2팀</span>
				<span class="item">기획3팀</span>
				<span class="item">개발1팀</span>
				<span class="item">개발2팀</span>
				<span class="item">개발3팀</span>
				<span class="item">디자인1팀</span>
				<span class="item">디자인2팀</span>
				<span class="item">퍼블리셔1팀</span>
				<span class="item">퍼블리셔2팀</span>
			</div>
		</div>`
	);

	//매출법인
	$('[data-layer="corp"]').append(
		`<div class="item-layer">												
			<div class="item-group">
				<span class="item">플랜아이</span>
				<span class="item">플랜파트너스</span>
				<span class="item">아누타</span>
				<span class="item">와이브릿지</span>
			</div>
		</div>`
	);

	//발주처
	$('[data-layer="orderer"]').append(
		`<div class="item-layer">			
			<div class="item-group">
				<span class="item">고용노동부</span>
				<span class="item">국가녹색기술연구소</span>
				<span class="item">국가유산청</span>
				<span class="item">국세청</span>
				<span class="item">국토연구원</span>
				<span class="item">기초과학지원연구원</span>
				<span class="item">문화관광체육부</span>
				<span class="item">보건복지부</span>
				<span class="item">새만금</span>
				<span class="item">한국연구단체</span>
				<span class="item">한국원자력연구원</span>
				<span class="item">한국전력개발</span>
				<span class="item">환경부</span>
			</div>
		</div>`
	);

	//담당자
	$('[data-layer="manager"]').append(
		`<div class="item-layer">												
			<div class="item-group">
				<span class="item">
					<span class="user-icon">						
						<img src="../img/layout/photo.png">
					</span>김소영					
				</span>
				<span class="item">
					<span class="user-icon">조</span>조정연					
				</span>
				<span class="item">
					<span class="user-icon">김</span>김승범					
				</span>
				<span class="item">
					<span class="user-icon">류</span>류혜정					
				</span>
				<span class="item">
					<span class="user-icon">						
						<img src="../img/layout/photo.png">
					</span>김소영					
				</span>
				<span class="item">
					<span class="user-icon">조</span>조정연					
				</span>
				<span class="item">
					<span class="user-icon">김</span>김승범					
				</span>
				<span class="item">
					<span class="user-icon">류</span>류혜정					
				</span>
				
			</div>
		</div>`
	);	

	//상태
	$('[data-layer="status"]').append(
		`<div class="item-layer">												
			<div class="item-group">
				<span class="item state before">착수전</span>
				<span class="item state ing">진행</span>
				<span class="item state hold">보류</span>
				<span class="item state end">완료</span>
			</div>
		</div>`
	);

	//매출입력
	$('[data-layer="sales"]').append(
		`<div class="item-layer sales-layer">
			<form>			
				<div class="item-cont vert">	
					<span class="form-control-unit"><input type="text" class="form-control"> 원</span>
					<input type="date" class="form-control" value="2025-01-23">
					<textarea class="form-control" rows="5">메모(잔금, 미수 등)</textarea>
					<div class="btn-area">
						<button type="reset" class="btn sm">취소</button>
						<button class="btn sm btn-save">저장</button>
					</div>
				</div>		
			</form>						
		</div>`				
	);	
	//메모입력
	$('[data-layer="memo"]').append(
		`<div class="item-layer memo-layer">
			<form action="#">			
				<div class="item-cont vert">
					<div class="item-add-group">
						<textarea class="form-control" rows="5">메모(잔금, 미수 등)</textarea>
					</div>	
					<div class="btn-area">
						<button type="reset" class="btn sm">취소</button>
						<button class="btn sm btn-save">저장</button>
					</div>
				</div>		
			</form>						
		</div>`				
	);	

	//직무
	$('[data-layer="job"]').append(
		`<div class="item-layer">												
			<div class="item-group">
				<span class="item">IT 컨설턴트</span>
				<span class="item">IT PM</span>
				<span class="item">UIUX기획/개발자</span>
				<span class="item">IT 서비스 기획자</span>
				<span class="item">UIUX디자이너</span>
				<span class="item">응용 SW 개발자</span>
			</div>
		</div>`
	);

	//줄 수정 및 삭제 버튼
	$('.row-btn-control').append(
		`<div class="btn-group">
			<button class="btn-delete"><i class="ri-delete-bin-line"></i></button>
			<button class="btn-modify"><i class="ri-pencil-line"></i></button>
		</div>`
	);	
})


/* //기간
	$('[data-layer="term"]').append(
		`<div class="item-layer">
			<div class="item-title">
				<strong>계약 기간</strong>
			</div>
			<div class="item-cont">
				<div class="item-add-group"></div>				
				
			</div>										
			<div class="item-group">
				<div class="item">
					<input type="date" class="form-control input-date" value="2025-01-08"> ~ <input type="date" class="form-control input-date" value="2025-01-23">
					<i class="ri-close-line"></i>
				</div>
			</div>
		</div>`
	); */	

	/* //일 선택
	$('[data-layer="date"]').append(
		`<div class="item-layer">
			<div class="item-cont">
				<div class="item-add-group"></div>	
				<div class="selected">
					<input type="date" class="input-date" value="2025-01-08">
				</div>
			</div>										
			<div class="item-group">
				캘린더
			</div>
		</div>`
	); */

	/* //금액
	$('[data-layer="amount"]').append(
		`<div class="item-layer">
			<div class="item-title">
				<strong>금액</strong>
			</div>
			<div class="item-cont">
				<div class="item-add-group"></div>	
				<div class="item selected">
					<input type="number" class="form-control input" value="1000000" step="10000">
				</div>
			</div>										
		</div>`				
	);	 */



