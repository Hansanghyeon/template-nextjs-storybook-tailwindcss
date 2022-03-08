import Head from "next/head";
import Image from "next/image";
import Btn from '@/components/Btn';

const Products = () => {
  return (
    <>
      <Head>
        <title>아우릇 왕실원형접시</title>
        <meta name="description" content="아우릇 왕실원형접시" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>header</header>
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="relative">
            <Image
              src="https://cdn.imweb.me/thumbnail/20211221/d77bc385d04a6.jpg"
              alt="thumbnail"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="grid">
            <div>
              <div>[주문제작상품]마호가니 유기원형접시 </div>
              <div>180,000원</div>
            </div>
            <div>
              <ul>
                <li>
                  <div className="title">DESCRIPTION</div>
                  <div>
                    MAHOGANY시리즈는 마호가니 무늬에 영감을 받아 제작되었습니다.
                    <br />
                    자연의 시간이 흐르며 나무는 나이테와 나무자체의 아름다운
                    무늬가 생겨납니다. 이에 영감을받아 자연에서 나온 천연 옻칠을
                    이용하여 마호가니를 무늬를 표현하였습니다
                    <br />
                    수많은 사포질과 옻칠 수작업과정을 통해 유기에 아름다움과
                    실용성을 더하였으며
                    <br />
                    금빛 유기와 마호가니 무늬의 조합은 어떤 음식을 담아도
                    고급스럽고 멋스럽게 연출됩니다.
                  </div>
                </li>
                <li>
                  <div className="title">INFORMATION</div>
                  <div>
                    사이즈: 지름21.5cm
                    <br />
                    <b>MATERIALS</b>
                    <br />
                    유기(구리78%,주석22%), 옻칠
                  </div>
                </li>
                <li>
                  <div className="title">세척방법</div>
                  <div>
                    옻칠: 세척 시 거친 수세미를 사용할 경우 표면이 벗겨지거나
                    손상될 수 있으니 부드러운 수세미를 이용해주세요. *유기가
                    변색된 경우 초록수세미를 이용해 설거지해 주시면 원래의
                    색으로 돌아옵니다.
                  </div>
                </li>
                <li>
                  <div className="title">NOTICE</div>
                  <div>
                    - 전자렌지 사용금지 - 오븐사용금지 - 찬물 식기세척기
                    사용가능
                  </div>
                </li>
              </ul>
              <div>
                원산지 대한민국
                <br />
                구매혜택 5,400 포인트 적립예정 적립예정
                <br />
                배송 방법 택배
                <br />
                배송비 무료 (100,000원 이상 무료배송) |도서산간 배송비 추가
                popover
              </div>
            </div>
            <div className="grid grid-cols-3 gap-[8px]">
              <Btn type="black">구매하기</Btn>
              <Btn>장바구니</Btn>
              <Btn type="heart" />
              <div className="col-span-3 flex gap-x-[8px]">
                <Btn type="naver" className="flex-1" />
                <Btn className="text-[#00c73c]">찜</Btn>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="tab">
            <div>tab1</div>
            <div>tab2</div>
          </div>
          <div className="tab1 content">
            아우릇스튜디오는 한국을 기반으로 젊은 세대의 일상속에서
            <br />
            한국의 전통 소재인 놋쇠와 옻칠을 통해 전통의 현대화를
            <br />
            전개하는 디자인듀오 브랜드입니다.
            <br />
            이종오명장과 전국의 다양한 유기장인들의 협업을 통해
            <br />
            현대적 디자인이 가미된 유기제품을 선보이며,
            <br />
            전통 유기에 옻칠을 더한 오브제를 제작하며 전통의 재해석을
            시도합니다.
            <br />
            유니크한 디자인의 유기부터 생활 속에 자연스럽게 스며들 수 있는
            <br />
            다양한 오브제를 디자인하여 선보입니다.
          </div>
        </div>
      </div>
      <footer>footer</footer>
    </>
  );
};

export default Products;

export const getStaticProps = async () => {
  return {
    props: {},
  };
}

export const getStaticPaths = async () => {
  return {
    paths: [`/products/test`],
    fallback: true,
  };
}
