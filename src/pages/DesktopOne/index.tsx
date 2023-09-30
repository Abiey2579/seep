import React from "react";

import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";

const DesktopOnePage: React.FC = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-catamaran items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex sm:h-[1329px] h-[1330px] md:h-[2634px] justify-end md:px-5 relative w-full">
            <PagerIndicator
              className="flex gap-2.5 h-[30px] justify-center mb-[37px] mt-auto mx-auto p-2.5 w-[100px]"
              count={3}
              activeCss="inline-block cursor-pointer h-2.5 bg-teal-600 w-10 relative rounded-[5px]"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-50 w-2.5 relative"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
            <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[77px] w-full">
              <header className="flex flex-row md:gap-10 items-center justify-between md:px-10 sm:px-5 px-[100px] py-4 w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[159px]"
                  leftIcon={
                    <div className="h-8 mt-0.5 mr-4 w-8 bg-red-300">
                      <Img
                        className="h-8"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                    </div>
                  }
                  shape="round"
                  size="sm"
                >
                  <div className="font-extrabold leading-[normal] text-left text-xl">
                    iBet Cafe’
                  </div>
                </Button>
                <ul className="flex flex-row gap-10 sm:hidden items-start justify-start p-3 w-auto common-row-list">
                  <li>
                    <a href="javascript:" className="text-base text-red-300">
                      <Text size="txtCatamaranRomanSemiBold16">Home</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-base text-blue_gray-900 hover:text-red-300"
                    >
                      <Text size="txtCatamaranRomanSemiBold16Bluegray900">
                        Online Tutor
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-base text-blue_gray-900 hover:text-red-300"
                    >
                      <Text size="txtCatamaranRomanSemiBold16Bluegray900">
                        Schedule
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-base text-blue_gray-900 hover:text-red-300"
                    >
                      <Text size="txtCatamaranRomanSemiBold16Bluegray900">
                        Contact
                      </Text>
                    </a>
                  </li>
                </ul>
              </header>
              <div className="bg-gray-100 flex flex-col items-center justify-start pb-6 sm:px-5 px-6 rounded-[12px] w-[93%] md:w-full">
                <div className="flex md:flex-col flex-row gap-3.5 items-start justify-start mb-7 w-[97%] md:w-full">
                  <div className="bg-teal-600 h-3 mb-[507px] md:mt-0 mt-[29px] rounded-[50%] w-3"></div>
                  <div className="flex flex-col justify-start w-[98%] md:w-full">
                    <div className="bg-deep_orange-500 h-5 md:ml-[0] ml-[685px] mr-[487px] w-[4%]"></div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[74px] w-full">
                      <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-[435px] sm:w-full">
                        <div className="h-[186px] relative w-[94%] sm:w-full">
                          <Img
                            className="h-5 ml-6 mt-[57px]"
                            src="images/img_signal.svg"
                            alt="signal"
                          />
                          <div className="absolute h-[186px] inset-[0] justify-center m-auto w-full">
                            <Text
                              className="leading-[130.00%] m-auto text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-full"
                              size="txtCatamaranRomanExtraBold48"
                            >
                              We take printing experience to the next level
                            </Text>
                            <Img
                              className="absolute bottom-[10%] h-[35px] right-[31%]"
                              src="images/img_greenfilament.svg"
                              alt="greenfilament"
                            />
                          </div>
                        </div>
                        <Text
                          className="leading-[150.00%] max-w-[435px] md:max-w-full text-base text-blue_gray-900_90"
                          size="txtCatamaranRomanRegular16"
                        >
                          Trust us for all your printing and office needs, where
                          professional solutions meet exceptional service and
                          affordability.
                        </Text>
                        <div className="flex flex-row gap-4 items-start justify-start w-auto">
                          <Button
                            className="cursor-pointer min-w-[123px] rounded text-base text-center"
                            color="gray_700"
                          >
                            Get Started
                          </Button>
                          <Button
                            className="cursor-pointer min-w-[121px] rounded text-base text-center"
                            color="blue_gray_300"
                            variant="outline"
                          >
                            Contact Us
                          </Button>
                        </div>
                      </div>
                      <div className="bg-blue_gray-200 h-2.5 mb-[397px] md:mt-0 mt-[5px] rounded-[50%] w-2.5"></div>
                      <Img
                        className="h-[412px] md:ml-[0] ml-[183px]"
                        src="images/img_undrawinformeddecisionp2lh.svg"
                        alt="undrawinformedd"
                      />
                    </div>
                    <div className="bg-amber-300 h-2 md:ml-[0] ml-[664px] mr-[540px] mt-[34px] rounded-[50%] w-2"></div>
                  </div>
                </div>
              </div>
              <Text
                className="mt-[70px] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900"
                size="txtCatamaranRomanBold40"
              >
                What We Provide
              </Text>
              <Text
                className="mt-2.5 text-base text-blue_gray-900_90 text-center w-[45%] sm:w-full"
                size="txtCatamaranRomanRegular16"
              >
                Our printing and office services business is dedicated to
                providing professional and affordable solutions to help
                streamline your daily tasks and improve your productivity.
              </Text>
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 1 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="mt-6 p-3 w-auto"
                items={[...Array(3)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <List
                      className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mx-2.5"
                      orientation="horizontal"
                    >
                      <div className="border border-blue_gray-50 border-solid flex flex-col gap-6 items-start justify-center p-8 sm:px-5 rounded-lg w-full">
                        <Img
                          className="h-10 w-10"
                          src="images/img_close.svg"
                          alt="close"
                        />
                        <Text
                          className="leading-[130.00%] max-w-[260px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                          size="txtCatamaranRomanBold24"
                        >
                          High-Quality DI Printing Solutions for All Your Needs
                        </Text>
                        <Text
                          className="leading-[150.00%] max-w-[260px] md:max-w-full text-base text-blue_gray-900_90"
                          size="txtCatamaranRomanRegular16"
                        >
                          Experience high-quality printing solutions for all
                          your needs with our professional services.
                        </Text>
                      </div>
                      <div className="border border-blue_gray-50 border-solid flex flex-col gap-6 items-start justify-center p-8 sm:px-5 rounded-lg w-full">
                        <Img
                          className="h-10 w-10"
                          src="images/img_checkmark_teal_600.svg"
                          alt="checkmark"
                        />
                        <Text
                          className="leading-[130.00%] max-w-[260px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                          size="txtCatamaranRomanBold24"
                        >
                          Expert Passport Photographs for Every Occasion
                        </Text>
                        <Text
                          className="leading-[150.00%] max-w-[260px] md:max-w-full text-base text-blue_gray-900_90"
                          size="txtCatamaranRomanRegular16"
                        >
                          Capture picture-perfect passport photographs for any
                          occasion with our expert services.
                        </Text>
                      </div>
                      <div className="border border-blue_gray-50 border-solid flex flex-col gap-6 items-start justify-center p-8 sm:px-5 rounded-lg w-full">
                        <Img
                          className="h-10 w-10"
                          src="images/img_volume.svg"
                          alt="volume"
                        />
                        <Text
                          className="leading-[130.00%] max-w-[260px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                          size="txtCatamaranRomanBold24"
                        >
                          Creative Graphic Design Solutions to Elevate Your
                          Brand
                        </Text>
                        <Text
                          className="leading-[150.00%] max-w-[260px] md:max-w-full text-base text-blue_gray-900_90"
                          size="txtCatamaranRomanRegular16"
                        >
                          Elevate your brand with creative and professional
                          graphic design solutions from our team of experts.
                        </Text>
                      </div>
                    </List>
                  </React.Fragment>
                ))}
                renderDotsItem={({ isActive }) => {
                  if (isActive) {
                    return (
                      <div className="inline-block cursor-pointer h-2.5 bg-teal-600 w-10 relative rounded-[5px]" />
                    );
                  }
                  return (
                    <div
                      className="inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-50 w-2.5 relative"
                      role="button"
                      tabIndex={0}
                    />
                  );
                }}
              />
            </div>
          </div>
          <Text
            className="leading-[120.00%] mt-[63px] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 w-[33%] sm:w-full"
            size="txtCatamaranRomanBold40"
          >
            Empower Yourself with Our Computer Training
          </Text>
          <Text
            className="leading-[150.00%] mt-3 text-base text-blue_gray-900_90 w-[35%] sm:w-full"
            size="txtCatamaranRomanRegular16"
          >
            Gain essential computer skills and unlock your potential with our
            comprehensive training programs, taught by expert instructors.
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[67px] items-center justify-start max-w-[1239px] mt-[38px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
              <div className="sm:gap-5 gap-6 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col gap-3 items-start justify-center p-6 sm:px-5 rounded-lg w-full">
                  <Img
                    className="h-[71px] w-[85px]"
                    src="images/img_signal_red_300.svg"
                    alt="signal"
                  />
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtCatamaranRomanBold24"
                  >
                    Better Jobs
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[203px] md:max-w-full text-base text-blue_gray-900_90"
                    size="txtCatamaranRomanRegular16"
                  >
                    Enhance your career with in-demand computer skills from our
                    training programs.
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-3 items-start justify-center p-6 sm:px-5 rounded-lg w-full">
                  <Img
                    className="h-[71px] w-[85px]"
                    src="images/img_volume_yellow_50.svg"
                    alt="volume"
                  />
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtCatamaranRomanBold24"
                  >
                    Productivity
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[203px] md:max-w-full text-base text-blue_gray-900_90"
                    size="txtCatamaranRomanRegular16"
                  >
                    Learning how to use computers efficiently can help you
                    streamline your work.
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-3 items-start justify-center p-6 sm:px-5 rounded-lg w-full">
                  <Img
                    className="h-[71px] w-[85px]"
                    src="images/img_close_red_50.svg"
                    alt="close"
                  />
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtCatamaranRomanBold24"
                  >
                    Communication
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[203px] md:max-w-full text-base text-blue_gray-900_90"
                    size="txtCatamaranRomanRegular16"
                  >
                    Computer training includes courses on how to use
                    communication tools.
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-3 items-start justify-center p-6 sm:px-5 rounded-lg w-full">
                  <Img
                    className="h-[71px] w-[85px]"
                    src="images/img_volume_blue_gray_50_01.svg"
                    alt="volume"
                  />
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtCatamaranRomanBold24"
                  >
                    Certificate{" "}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[203px] md:max-w-full text-base text-blue_gray-900_90"
                    size="txtCatamaranRomanRegular16"
                  >
                    Receive a certificate of completion upon finishing your
                    training program.
                  </Text>
                </div>
              </div>
            </div>
            <div className="md:h-[371px] sm:h-[420px] h-[425px] relative w-[53%] md:w-full">
              <div className="absolute md:h-[371px] sm:h-[420px] h-[421px] inset-[0] justify-center m-auto w-full">
                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                  <div className="flex flex-col md:gap-10 gap-[149px] items-center justify-start w-full">
                    <Img
                      className="h-[205px]"
                      src="images/img_vector_blue_gray_800_205x551.svg"
                      alt="vector"
                    />
                    <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-full">
                      <Line className="bg-gray-300 h-px w-full" />
                      <Line className="bg-gray-300 h-px w-full" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[0] flex flex-row items-start justify-between right-[4%] w-[62%]">
                  <Img
                    className="h-[306px] mb-16"
                    src="images/img_group.svg"
                    alt="group"
                  />
                  <div className="h-[231px] md:h-[310px] sm:h-[355px] mt-[139px] relative w-[230px]">
                    <div className="md:h-[164px] sm:h-[216px] h-[231px] m-auto w-[230px]">
                      <div className="md:h-[164px] sm:h-[216px] h-[231px] m-auto w-[230px]">
                        <div className="absolute bottom-[0] md:h-[164px] sm:h-[216px] h-[217px] inset-x-[0] mx-auto w-full">
                          <div className="md:h-[164px] sm:h-[216px] h-[217px] m-auto w-full">
                            <div className="md:h-[164px] sm:h-[216px] h-[217px] m-auto w-full">
                              <div className="flex flex-col gap-6 h-full justify-start m-auto w-full">
                                <Img
                                  className="h-[30px] md:ml-[0] ml-[113px] w-[30px]"
                                  src="images/img_vector.svg"
                                  alt="vector_One"
                                />
                                <div className="md:h-[110px] sm:h-[162px] h-[163px] relative w-full">
                                  <div className="md:h-[110px] sm:h-[162px] h-[163px] m-auto w-full">
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto pt-[9px] px-[9px] w-full"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group3.svg')",
                                      }}
                                    >
                                      <div className="flex flex-col md:gap-10 gap-[92px] items-end justify-start md:ml-[0] ml-[47px] w-[30%] md:w-full">
                                        <Img
                                          className="h-[21px]"
                                          src="images/img_vector_white_a700.svg"
                                          alt="vector_Two"
                                        />
                                        <Img
                                          className="h-10"
                                          src="images/img_checkmark_blue_gray_900_01.svg"
                                          alt="checkmark"
                                        />
                                      </div>
                                    </div>
                                    <Img
                                      className="absolute bottom-[0] h-[49px] right-[28%]"
                                      src="images/img_checkmark_blue_gray_900_01.svg"
                                      alt="checkmark_One"
                                    />
                                  </div>
                                  <Img
                                    className="absolute bottom-[12%] h-24 right-[27%]"
                                    src="images/img_vector_blue_gray_900_01.svg"
                                    alt="vector_Three"
                                  />
                                </div>
                              </div>
                              <Img
                                className="absolute bottom-[10%] h-[103px] right-[20%]"
                                src="images/img_vector_blue_gray_900_01_103x83.svg"
                                alt="vector_Four"
                              />
                            </div>
                            <Img
                              className="absolute h-[78px] right-[26%] top-[15%]"
                              src="images/img_volume_red_300.svg"
                              alt="volume"
                            />
                          </div>
                          <Img
                            className="absolute h-[49px] left-[28%] top-[24%]"
                            src="images/img_vector_gray_600.svg"
                            alt="vector_Five"
                          />
                        </div>
                        <Img
                          className="absolute h-[69px] right-[24%] top-[0]"
                          src="images/img_megaphone.svg"
                          alt="megaphone"
                        />
                      </div>
                      <Img
                        className="absolute h-[26px] right-[40%] top-[21%]"
                        src="images/img_vector_red_300.svg"
                        alt="vector_Six"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[0] h-[171px] right-[5%]"
                      src="images/img_vector_gray_300.svg"
                      alt="vector_Seven"
                    />
                    <Img
                      className="absolute h-[7px] left-[15%] top-[3%]"
                      src="images/img_menu.svg"
                      alt="menu_One"
                    />
                  </div>
                </div>
              </div>
              <Img
                className="absolute bottom-[0] h-[230px] left-[4%]"
                src="images/img_group_blue_gray_900_01.svg"
                alt="group_One"
              />
              <Img
                className="absolute h-[19px] right-[38%] top-[44%]"
                src="images/img_vector_blue_gray_800.svg"
                alt="vector_Eight"
              />
            </div>
          </div>
          <div className="bg-blue_gray-900 flex md:flex-col flex-row gap-[50px] h-[200px] md:h-auto items-center justify-center max-w-[1099px] mt-[100px] mx-auto md:px-5 px-[100px] rounded-lg w-full">
            <Img
              className="h-[58px] w-[100px]"
              src="images/img_greenfilament_teal_600.svg"
              alt="greenfilament_One"
            />
            <div className="flex flex-col gap-4 items-center justify-start w-auto">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-amber-300 w-auto"
                size="txtQuicksandBold32"
              >
                4.9/5
              </Text>
              <Line className="bg-blue_gray-300 h-px w-full" />
              <Text
                className="text-base text-blue_gray-300 w-auto"
                size="txtCatamaranRomanSemiBold16Bluegray300"
              >
                Star ⭐ rating
              </Text>
            </div>
            <div className="flex flex-col gap-4 items-center justify-start w-auto">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-amber-300 w-auto"
                size="txtQuicksandBold32"
              >
                +1,000
              </Text>
              <Line className="bg-blue_gray-300 h-px w-full" />
              <Text
                className="text-base text-blue_gray-300 w-auto"
                size="txtCatamaranRomanSemiBold16Bluegray300"
              >
                Graduates
              </Text>
            </div>
            <div className="flex flex-col gap-4 items-center justify-start w-auto">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-amber-300 w-auto"
                size="txtQuicksandBold32"
              >
                +300
              </Text>
              <Line className="bg-blue_gray-300 h-px w-full" />
              <Text
                className="text-base text-blue_gray-300 w-auto"
                size="txtCatamaranRomanSemiBold16Bluegray300"
              >
                Positive Feedback
              </Text>
            </div>
            <Img
              className="h-[157px] w-[149px]"
              src="images/img_group7.svg"
              alt="groupSeven"
            />
          </div>
          <div className="bg-gray-100 flex flex-col gap-[50px] items-center justify-start mt-[100px] p-[50px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col gap-4 items-center justify-center p-2 w-auto sm:w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 w-auto"
                size="txtCatamaranRomanBold40"
              >
                Frequently Asked Questions
              </Text>
              <Line className="bg-deep_orange-500 h-[3px] w-[21%]" />
            </div>
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[100px] grid md:grid-cols-[repeat(0,_1fr_3px)_1fr] grid-cols-[repeat(1,_1fr_3px)_1fr] justify-center max-w-[1200px] mb-0.5 mx-auto w-full"
              orientation="horizontal"
            >
              <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-auto sm:w-full">
                <div className="bg-white-A700 flex flex-row gap-6 items-start justify-between p-4 rounded-lg w-[500px] sm:w-full">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtCatamaranRomanRegular16Bluegray900"
                  >
                    What types of printing services do you offer?
                  </Text>
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_search.svg"
                    alt="search"
                  />
                </div>
                <div className="bg-white-A700 flex flex-row gap-6 items-start justify-between p-4 rounded-lg w-[500px] sm:w-full">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtCatamaranRomanRegular16Bluegray900"
                  >
                    Do you provide same-day passport photographs?
                  </Text>
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_search.svg"
                    alt="search_One"
                  />
                </div>
                <div className="bg-white-A700 flex flex-col gap-3 items-start justify-start p-4 rounded-lg w-[500px] sm:w-full">
                  <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtCatamaranRomanRegular16Bluegray900"
                    >
                      Can you assist with document scanning and copying?
                    </Text>
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_search.svg"
                      alt="search_Two"
                    />
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[468px] md:max-w-full text-blue_gray-900_87 text-sm"
                    size="txtCatamaranRomanRegular14"
                  >
                    Yes, we offer document scanning and copying services at our
                    business. Our state-of-the-art equipment ensures
                    high-quality results, and our team is dedicated to providing
                    efficient and accurate service to all of our clients.
                    Contact us for more information or to request a quote.
                  </Text>
                </div>
                <div className="bg-white-A700 flex sm:flex-col flex-row gap-6 items-start justify-between p-4 rounded-lg w-[500px] sm:w-full">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtCatamaranRomanRegular16Bluegray900"
                  >
                    What types of graphic design projects can you help with?
                  </Text>
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_search.svg"
                    alt="search_Three"
                  />
                </div>
              </div>
              <Line className="self-center h-[501px] bg-deep_orange-500 w-[3px]" />
              <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-auto sm:w-full">
                <div className="bg-white-A700 flex flex-row gap-6 items-start justify-between p-4 rounded-lg w-[500px] sm:w-full">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtCatamaranRomanRegular16Bluegray900"
                  >
                    What are your hours of operation?
                  </Text>
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_search.svg"
                    alt="search"
                  />
                </div>
                <div className="bg-white-A700 flex flex-col gap-3 items-start justify-start p-4 rounded-lg w-[500px] sm:w-full">
                  <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtCatamaranRomanRegular16Bluegray900"
                    >
                      How long do your training programs typically last?
                    </Text>
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_search.svg"
                      alt="search_One"
                    />
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[468px] md:max-w-full text-blue_gray-900_87 text-sm"
                    size="txtCatamaranRomanRegular14"
                  >
                    <>
                      Our training programs typically last for 6 months. During
                      this time, you&#39;ll have the opportunity to gain
                      in-depth knowledge and hands-on experience with a variety
                      of computer skills and applications. Our expert
                      instructors are committed to providing comprehensive
                      training that prepares you for success in your chosen
                      field. Contact us for more information or to enroll in one
                      of our programs.
                    </>
                  </Text>
                </div>
                <div className="bg-white-A700 flex sm:flex-col flex-row gap-6 items-start justify-between p-4 rounded-lg w-[500px] sm:w-full">
                  <Text
                    className="leading-[150.00%] max-w-[426px] md:max-w-full text-base text-blue_gray-900"
                    size="txtCatamaranRomanRegular16Bluegray900"
                  >
                    Can I receive a certificate of completion after finishing a
                    training program?
                  </Text>
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_search.svg"
                    alt="search_Two"
                  />
                </div>
                <div className="bg-white-A700 flex sm:flex-col flex-row gap-6 items-start justify-between p-4 rounded-lg w-[500px] sm:w-full">
                  <Text
                    className="leading-[150.00%] max-w-[426px] md:max-w-full text-base text-blue_gray-900"
                    size="txtCatamaranRomanRegular16Bluegray900"
                  >
                    Do you offer any discounts for bulk printing or training
                    program enrollments?
                  </Text>
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_search.svg"
                    alt="search_Three"
                  />
                </div>
              </div>
            </List>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1143px] mt-[125px] mx-auto md:px-5 w-full">
            <Img
              className="h-[394px] mb-14"
              src="images/img_group15.svg"
              alt="groupFifteen"
            />
            <div className="flex flex-col md:mt-0 mt-[66px] relative w-[51%] md:w-full">
              <div className="flex flex-col gap-[30px] items-start justify-start mx-auto w-auto">
                <Text
                  className="leading-[170.00%] max-w-[578px] md:max-w-full text-blue_gray-900_90 text-xl"
                  size="txtCatamaranRomanRegular20"
                >
                  Our mission is to provide exceptional services and training
                  programs that empower our clients to achieve their goals,
                  while our vision is to be a leading provider of innovative and
                  reliable solutions in the printing, photography, and computer
                  training industries. We are committed to maintaining the
                  highest standards of customer service.
                </Text>
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-xl w-auto"
                    size="txtCatamaranRomanBold20"
                  >
                    Abba Umar Ibet
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900_90 w-auto"
                    size="txtCatamaranRomanRegular16"
                  >
                    Chief Executive Office
                  </Text>
                </div>
              </div>
              <Img
                className="h-[184px] ml-auto mr-[92px] mt-[-65px] z-[1]"
                src="images/img_group16.svg"
                alt="groupSixteen"
              />
            </div>
          </div>
          <footer className="bg-blue_gray-900 flex items-center justify-center mt-[52px] md:px-5 w-full">
            <div className="flex flex-col gap-2 items-center justify-center my-2 w-full">
              <div className="flex relative w-full">
                <div className="flex flex-col md:gap-10 gap-[212px] justify-start my-auto w-2/5">
                  <Img
                    className="h-[70px] md:ml-[0] ml-[496px]"
                    src="images/img_group9.svg"
                    alt="groupNine"
                  />
                  <Img
                    className="h-5 w-5"
                    src="images/img_contrast.svg"
                    alt="contrast"
                  />
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1440px] mb-3.5 ml-[-564px] mr-auto mt-auto md:px-10 sm:px-5 px-[100px] w-full z-[1]">
                  <div className="flex flex-col gap-8 items-start justify-start w-auto">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[159px]"
                        leftIcon={
                          <div className="h-8 mt-0.5 mr-4 w-8 bg-amber-300">
                            <Img
                              className="h-8"
                              src="images/img_checkmark_amber_300.svg"
                              alt="checkmark"
                            />
                          </div>
                        }
                        shape="round"
                        color="blue_gray_900"
                        size="sm"
                      >
                        <div className="font-extrabold leading-[normal] text-left text-xl">
                          iBet Cafe’
                        </div>
                      </Button>
                      <Text
                        className="leading-[150.00%] max-w-[334px] md:max-w-full text-base text-blue_gray-300_90"
                        size="txtCatamaranRomanMedium16"
                      >
                        Trust us for all your printing and office needs, where
                        professional solutions meet exceptional service and
                        affordability.
                      </Text>
                    </div>
                    <Img
                      className="h-10 w-[220px]"
                      src="images/img_frame30.svg"
                      alt="frameThirty"
                    />
                  </div>
                  <div className="flex flex-row gap-[60px] items-start justify-start w-auto">
                    <div className="flex flex-col items-start justify-center w-auto">
                      <Text
                        className="bg-blue_gray-900 justify-center pb-[13px] pl-3 sm:pr-5 pr-[35px] pt-2.5 rounded-lg text-white-A700 text-xl w-[151px]"
                        size="txtCatamaranRomanExtraBold20"
                      >
                        Resources
                      </Text>
                      <ul className="flex flex-col gap-5 items-start justify-start p-3 w-auto md:w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="text-base text-blue_gray-300_90"
                          >
                            <Text size="txtCatamaranRomanMedium16">
                              Contact Us
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-base text-blue_gray-300_90"
                          >
                            <Text size="txtCatamaranRomanMedium16">FAQ</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-base text-blue_gray-300_90"
                          >
                            <Text size="txtCatamaranRomanMedium16">
                              Our Services
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-base text-blue_gray-300_90"
                          >
                            <Text size="txtCatamaranRomanMedium16">
                              Computer Training
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center w-auto">
                      <Text
                        className="bg-blue_gray-900 justify-center pl-3 sm:pr-5 pr-[35px] py-[11px] rounded-lg text-white-A700 text-xl w-[157px]"
                        size="txtCatamaranRomanExtraBold20"
                      >
                        Legals
                      </Text>
                      <ul className="flex flex-col gap-5 items-start justify-start p-3 w-auto md:w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="text-base text-blue_gray-300_90"
                          >
                            <Text size="txtCatamaranRomanMedium16">
                              Copyrights
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-base text-blue_gray-300_90"
                          >
                            <Text size="txtCatamaranRomanMedium16">
                              Privacy Policy
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-base text-blue_gray-300_90"
                          >
                            <Text size="txtCatamaranRomanMedium16">
                              Disclaimer
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-base text-blue_gray-300_90"
                          >
                            <Text size="txtCatamaranRomanMedium16">
                              Terms & Conditions
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="h-5 md:ml-[0] ml-[1420px] w-5"
                src="images/img_signal_red_300_20x20.svg"
                alt="signal_One"
              />
              <div className="h-[73px] md:px-10 sm:px-5 px-[100px] relative w-[1440px] md:w-full">
                <Text
                  className="my-auto text-base text-blue_gray-50_90 w-auto"
                  size="txtCatamaranRomanMedium16Bluegray5090"
                >
                  2023 Copyright all right reserved
                </Text>
                <div className="absolute h-[73px] inset-[0] justify-center m-auto w-[87%] md:w-full">
                  <Img
                    className="absolute h-[73px] inset-[0] justify-center m-auto w-[78px]"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Text
                    className="absolute h-max inset-y-[0] my-auto right-[0] text-base text-blue_gray-50_90 w-auto"
                    size="txtCatamaranRomanMedium16Bluegray5090"
                  >
                    Terms & Conditions - Privacy Policy
                  </Text>
                  <Line className="absolute bg-blue_gray-300 h-px inset-x-[0] mx-auto top-[0] w-full" />
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
