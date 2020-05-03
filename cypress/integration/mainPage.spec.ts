/// <reference types="cypress" />

context('[MAIN-PAGE]', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/')
    })

    it('[MAIN-PAGE] 로그아웃 버튼 클릭', () => {
        const stub = cy.stub()

        cy.on('window:alert', stub)
        cy.get('[data-test="test-logout"]').click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('로그아웃')
            });
    })

    it('[MAIN-PAGE] 노트북 대여 이벤트 클릭', () => {
        const stub = cy.stub()

        cy.on('window:alert', stub)
        cy.get('[data-test="test-laptopEvent"]').click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('노트북 대여 이벤트 클릭')
            });
    })

    it('[MAIN-PAGE] 기상음악 신청 이벤트 클릭', () => {
        const stub = cy.stub()

        cy.on('window:alert', stub)
        cy.get('[data-test="test-songEvent"]').click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('기상음악 신청 이벤트 클릭')
            });
    })

    it('[MAIN-PAGE] 더보기 이벤트 클릭', () => {
        const stub = cy.stub()

        cy.on('window:alert', stub)
        cy.get('[data-test="test-more"]').click({ multiple : true})
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('더보기 클릭')
            });
    })

    it('[MAIN-PAGE] 게시글 리스트 이벤트 클릭', () => {
        const stub = cy.stub()

        cy.on('window:alert', stub)
        cy.get('[data-test="test-postList"]').click({ multiple : true})
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('리스트 클릭')
            });
    })

})
