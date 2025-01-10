
$(function () {       

	/* =======================================================================================
	레이아웃
	======================================================================================= */ 	
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

	/* =======================================================================================
	아이템 선택 레이어 생성
	======================================================================================= */ 
	//프로젝트 분류
	$('[data-layer="project"]').append(
		`<div class="item-layer">
			<div class="item-title">
				<strong>프로젝트 분류</strong>
				<button class="tooltip">
					<i class="ri-information-fill"></i>
					<span>원하는 분류 태그가 없으면 직접 입력</span>
				</button>
			</div>
			<div class="item-cont">
				<label class="item selected"><input type="checkbox" checked>홈페이지 구축</label>
				<input type="text" class="input-text form-control" placeholder="직접입력">
			</div>										
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

	//부서
	$('[data-layer="dept"]').append(
		`<div class="item-layer">
			<div class="item-title">
				<strong>부서</strong>
				<button class="tooltip">
					<i class="ri-information-fill"></i>
					<span>원하는 분류 태그가 없으면 직접 입력</span>
				</button>
			</div>
			<div class="item-cont">
				<label class="item selected"><input type="checkbox" checked>EX 사업부</label>
				<input type="text" class="input-text form-control" placeholder="직접입력">
			</div>										
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

	//매출법인
	$('[data-layer="corp"]').append(
		`<div class="item-layer">
			<div class="item-title">
				<strong>매출법인</strong>
				<button class="tooltip">
					<i class="ri-information-fill"></i>
					<span>원하는 분류 태그가 없으면 직접 입력</span>
				</button>
			</div>
			<div class="item-cont">
				<input type="text" class="input-text form-control" placeholder="직접입력">
			</div>										
			<div class="item-group">
				<span class="item">플랜아이</span>
				<span class="item">플랜파트너스</span>
				<span class="item">아누타</span>
				<span class="item">와이브릿지</span>
			</div>
		</div>`
	);

	//담당자
	$('[data-layer="manager"]').append(
		`<div class="item-layer">
			<div class="item-title">
				<strong>담당자</strong>
				<button class="tooltip">
					<i class="ri-information-fill"></i>
					<span>원하는 분류 태그가 없으면 직접 입력</span>
				</button>
			</div>
			<div class="item-cont">
				<label class="item selected"><input type="checkbox" checked><span class="user-icon">						
						<img src="../img/layout/photo.png">
					</span>김소영</label>
				<input type="text" class="input-text form-control" placeholder="직접입력">
			</div>										
			<div class="item-group">
				<span class="item"><span class="user-icon">						
					<img src="../img/layout/photo.png">
				</span>김소영</span>
				<span class="item"><span class="user-icon">조</span>조정연</span>
				<span class="item"><span class="user-icon">김</span>김승범</span>
				<span class="item"><span class="user-icon">류</span>류혜정</span>
				<span class="item"><span class="user-icon">						
					<img src="../img/layout/photo.png">
				</span>김소영</span>
				<span class="item"><span class="user-icon">조</span>조정연</span>
				<span class="item"><span class="user-icon">김</span>김승범</span>
				<span class="item"><span class="user-icon">류</span>류혜정</span>
			</div>
		</div>`
	);

	//기간
	$('[data-layer="term"]').append(
		`<div class="item-layer">
			<div class="item-title">
				<strong>계약 기간</strong>
			</div>
			<div class="item-cont">
				<div class="item selected">
					<input type="date" class="input-date" value="2025-01-08"> <input type="date" class="input-date" value="2025-01-23">
				</div>
			</div>										
			<div class="item-group">
				캘린더
			</div>
		</div>`
	);	

	//일 선택
	$('[data-layer="date"]').append(
		`<div class="item-layer calender-date">
			<div class="item-cont">
				<div class="selected">
					<input type="date" class="input-date" value="2025-01-08">
				</div>
			</div>										
			<div class="item-group">
				캘린더
			</div>
		</div>`
	);

	//상태
	$('[data-layer="status"]').append(
		`<div class="item-layer">
			<div class="item-title">
				<strong>진행상태</strong>
				<button class="tooltip">
					<i class="ri-information-fill"></i>
					<span>원하는 분류 태그가 없으면 직접 입력</span>
				</button>
			</div>
			<div class="item-cont">
				<label class="state ing item selected"><input type="checkbox" checked>진행</label>
				<input type="text" class="input-text form-control" placeholder="직접입력">
			</div>										
			<div class="item-group">
				<button class="state before">착수전</button>
				<button class="state ing">진행</button>
				<button class="state hold">보류</button>
				<button class="state end">완료</button>
			</div>
		</div>`
	);
	
	//금액
	$('[data-layer="amount"]').append(
		`<div class="item-layer">
			<div class="item-title">
				<strong>사업 금액</strong>
			</div>
			<div class="item-cont">
				<div class="item selected">
					<input type="number" class="input" value="1000000" step="10000"> ~ 
					<input type="number" class="input" value="8000000000" step="10000">
				</div>
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

	//줄 수정 및 삭제 버튼
	$('.row-btn-control').append(
		`<div class="btn-group">
			<button class="btn-delete"><i class="ri-delete-bin-line"></i></button>
			<button class="btn-modify"><i class="ri-pencil-line"></i></button>
		</div>`
	);	
})



