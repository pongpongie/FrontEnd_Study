class StringFormatException extends Error {
    // 입력 요소에 대한 selector (추가)
    #selector;

    // 입력요소를 두 번째 파라미터로 전달받는다.(수정)
    constructor(msg = '잘못된 요청 입니다.', selector = undefined) {
        super(msg);
        super.name = 'StringFormatException';
        // 멤버변수에 입력요소를 참조시킨다(추가)
        this.#selector = selector;
    }

    // 입력요소의 selector에 대한 getter (추가)
    get selector() {
        return this.#selector;
    }

    // 입력요소의 selector에 해당하는 HTMLElement 객체 반환
    get element() {
        const el = this.#selector !== null ? document.querySelector(this.#selector) : undefined;
        return el;
    }
}

/**
 * 정규표현식을 기반으로 입력값에 대한 유효성 검사를 수행하는 클래스.
 * HTML 문서에서 사용하기 위해 input selector에 대한 입력값을 검사한다.
 */
class RegexHelper {
    /**
     * 값의 존재 여부를 검사한다.
     * @param  {string} selector    검사할 대상에 대한 <INPUT>요소의 selector
     * @param  {string} msg         값이 없을 경우 표시할 메시지 내용
     *
     * ex) regexHelper.value('#user_id', '아이디를 입력하세요.');
     */
    value(selector, msg) {
        const content = document.querySelector(selector).value;

        if (content === undefined || content === null || (typeof content === 'string' && content.trim().length === 0)) {
            throw new StringFormatException(msg, selector);
        }

        return true;
    }

    /**
     * 입력값이 지정된 글자수를 초과했는지 검사한다.
     * @param  {string} selector   검사할 대상에 대한 <INPUT>요소의 selector
     * @param  {int} len           최대 글자수
     * @param  {string} msg        값이 없을 경우 표시될 메시지
     */
    maxLength(selector, len, msg) {
        this.value(selector, msg);

        const content = document.querySelector(selector).value;

        if (content.trim().length > len) {
            throw new StringFormatException(msg, selector);
        }

        return true;
    }

    /**
     * 입력값이 지정된 글자수 미만인지 검사한다.
     * @param  {string} selector    검사할 대상에 대한 <INPUT>요소의 selector
     * @param  {int} len            최소 글자수
     * @param  {string} msg         값이 없을 경우 표시될 메시지
     */
    minLength(selector, len, msg) {
        this.value(selector, msg);

        let content = document.querySelector(selector).value;

        if (content.trim().length < len) {
            throw new StringFormatException(msg, selector);
        }

        return true;
    }

    /**
     * 두 값이 동일한지 검사한다.
     * @param  {string} origin  원본에 대한 <INPUT>요소의 selector
     * @param  {string} compare 검사 대상에 대한 <INPUT>요소의 selector
     * @param  {string} msg     검사에 실패할 경우 표시할 메시지
     */
    compareTo(origin, compare, msg) {
        this.value(origin, msg);
        this.value(compare, msg);

        var src = document.querySelector(origin).value.trim(); // 원본값을 가져온다.
        var dsc = document.querySelector(compare).value.trim(); // 비교할 값을 가져온다.

        if (src !== dsc) {
            throw new StringFormatException(msg, origin);
        }

        return true; // 성공했음을 리턴
    }

    /**
     * 라디오나 체크박스가 선택된 항목인지 확인한다.
     * @param  {string} selector   검사할 CheckBox에 대한 selector
     * @param  {string} msg     검사에 실패할 경우 표시할 메시지
     */
    check(selector, msg) {
        const elList = document.querySelectorAll(selector);
        const checkedItem = Array.from(elList).filter((v, i) => v.checked);

        if (checkedItem.length === 0) {
            throw new StringFormatException(msg, selector);
        }
    }

    /**
     * 라디오나 체크박스의 최소 선택 갯수를 제한한다.
     * @param  {string} selector   검사할 CheckBox에 대한 selector
     * @param  {string} msg     검사에 실패할 경우 표시할 메시지
     */
    checkMin(selector, len, msg) {
        const elList = document.querySelectorAll(selector);
        const checkedItem = Array.from(elList).filter((v, i) => v.checked);

        if (checkedItem.length < len) {
            throw new StringFormatException(msg, selector);
        }
    }

    /**
     * 라디오나 체크박스의 최대 선택 갯수를 제한한다.
     * @param  {string} selector   검사할 CheckBox에 대한 selector
     * @param  {string} msg     검사에 실패할 경우 표시할 메시지
     */
    checkMax(selector, len, msg) {
        const elList = document.querySelectorAll(selector);
        const checkedItem = Array.from(elList).filter((v, i) => v.checked);

        if (checkedItem.length > len) {
            throw new StringFormatException(msg, selector);
        }
    }

    /**
     * 입력값이 정규표현식을 충족하는지 검사한다.
     * @param  {string} selector    검사할 대상에 대한 <INPUT>요소의 selector
     * @param  {string} msg         표시할 메시지
     * @param  {object} regexExpr   검사할 정규표현식
     */
    selector(selector, msg, regexExpr) {
        this.value(selector, msg);

        // 입력값에 대한 정규표현식 검사가 실패라면?
        if (!regexExpr.test(document.querySelector(selector).value.trim())) {
            throw new StringFormatException(msg, selector);
        }

        return true;
    }

    /**
     * 숫자로만 이루어 졌는지 검사하기 위해 selector()를 간접적으로 호출한다.
     * @param  {string} selector    검사할 대상에 대한 <INPUT>요소의 selector
     * @param  {string} msg         표시할 메시지
     */
    num(selector, msg) {
        return this.selector(selector, msg, /^[0-9]*$/);
    }

    /**
     * 영문으로만 이루어 졌는지 검사하기 위해 selector()를 간접적으로 호출한다.
     * @param  {string} selector    검사할 대상에 대한 <INPUT>요소의 selector
     * @param  {string} msg         표시할 메시지
     */
    eng(selector, msg) {
        return this.selector(selector, msg, /^[a-zA-Z]*$/);
    }

    /**
     * 한글로만 이루어 졌는지 검사하기 위해 selector()를 간접적으로 호출한다.
     * @param  {string} selector    검사할 대상에 대한 <INPUT>요소의 selector
     * @param  {string} msg         표시할 메시지
     */
    kor(selector, msg) {
        return this.selector(selector, msg, /^[ㄱ-ㅎ가-힣]*$/);
    }

    /**
     * 영문과 숫자로 이루어 졌는지 검사하기 위해 selector()를 간접적으로 호출한다.
     * @param  {string} selector    검사할 대상에 대한 <INPUT>요소의 selector
     * @param  {string} msg         표시할 메시지
     */
    engNum(selector, msg) {
        return this.selector(selector, msg, /^[a-zA-Z0-9]*$/);
    }

    /**
     * 한글과 숫자로만 이루어 졌는지 검사하기 위해 selector()를 간접적으로 호출한다.
     * @param  {string} selector    검사할 대상에 대한 <INPUT>요소의 selector
     * @param  {string} msg         표시할 메시지
     */
    korNum(selector, msg) {
        return this.selector(selector, msg, /^[ㄱ-ㅎ가-힣0-9]*$/);
    }

    /**
     * 이메일주소 형식인지 검사하기 위해 selector()를 간접적으로 호출한다.
     * @param  {string} selector    검사할 대상에 대한 <INPUT>요소의 selector
     * @param  {string} msg         표시할 메시지
     */
    email(selector, msg) {
        return this.selector(selector, msg, /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i);
    }

    /**
     * 핸드폰 번호 형식인지 검사하기 위해 selector()를 간접적으로 호출한다.
     * @param  {string} selector    검사할 대상에 대한 <INPUT>요소의 selector
     * @param  {string} msg         표시할 메시지
     */
    cellphone(selector, msg) {
        return this.selector(selector, msg, /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/);
    }

    /**
     * 집전화 형식인지 검사하기 위해 selector()를 간접적으로 호출한다.
     * @param  {string} selector    검사할 대상에 대한 <INPUT>요소의 selector
     * @param  {string} msg         표시할 메시지
     */
    telphone(selector, msg) {
        return this.selector(selector, msg, /^\d{2,3}\d{3,4}\d{4}$/);
    }

    /**
     * 핸드폰번호 형식과 집전화 번호 형식 둘중 하나를 충족하는지 검사
     * @param  {string} selector    검사할 대상에 대한 <INPUT>요소의 selector
     * @param  {string} msg         표시할 메시지
     */
    phone(selector, msg) {
        this.value(selector, msg);

        const content = document.querySelector(selector).value.trim();
        var check1 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/; // 핸드폰 형식
        var check2 = /^\d{2,3}\d{3,4}\d{4}$/; // 집전화 형식

        // 핸드폰 형식도 아니고          집전화 형식도 아니라면?
        if (!check1.test(content) && !check2.test(content)) {
            throw new StringFormatException(msg, selector);
        }
        return true; // 성공했음을 리턴
    }
}

export { StringFormatException };

export default new RegexHelper();
