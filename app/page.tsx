import Image from "next/image";
// import config from "@/config";
import PresaleCard from "@/components/presale-card";
import MineProTag from "@/components/minepro-tag";
import BenefitsCard from "@/components/benefits-card";
import { Button } from "@/components/ui/button";
import FAQCard from "@/components/faq-card";
import {
  slideFromLeftVariants,
  slideFromRightVariants,
  slideUpVariants,
  fadeInVariants,
} from "../types";
import { MotionDiv } from "@/components/motion-div";
import { ScrollToTop } from "@/components/scroll-to-top";
import { RewardSystemCard } from "@/components/reward-system-card";
import { HowToBuyItems } from "@/components/how-to-buy-items";
import ScrollingPartners from "@/components/scrolling-partners";
import Roadmap from "@/components/roadmap";
import VideoPlayer from "@/components/VideoPlayer";
import Partners from "@/components/Partners";
import { photoAnimDelay } from "../types";
import Grid from "@/components/Grid";
export default function Home() {
  return (
    <main className="overflow-hidden relative">
      {/* orb bg */}
      <div className="publicSaleSectionBG top-[320px] lg:top-[0px] -right-[300px] lg:right-0"></div>
      {/* <div className=" absolute top-[320px] lg:top-[0px] z-50 -right-[300px] lg:right-0">
        <video width="900" height="1200" loop controls>
          <source src="Globe_Header_Animated.mp4" type="video/mp4" />
        </video>
      </div> */}
      {/* top section - hero text and presale card */}
      <section className="relative pb-20">
        <div className="heroSectionBG"></div> {/* top radial gradient */}
        <div className="heroSectionBG2"></div> {/* grid lines */}
        {/* content container */}
        <div className="flex flex-col lg:flex-row justify-center  gap-12 lg:gap-20 items-center">
          {/* lefthand content - logo, title, description */}
          <div className="ml-4 mr-4 lg:ml-4 xl:ml-8 lg:mr-0 mb-8 ">
            <MineProTag />
            <div className="mt-4">
              <h1
                className={`grayTextGradient max-w-xl lg:max-w-[700px] text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[80px]`}
              >
                Tokenized Bitcoin Mining For The People
              </h1>
              <p className="mt-5 max-w-[560px] text-white/60 text-[16px] sm:text-[18px] lg:text-[20px]">
                MinePro is an innovative tokenized Bitcoin mining project which
                pays investors 10-20% monthly profit in Bitcoin just for staking
                our native token, $MINE.
              </p>
            </div>
          </div>
          {/* righthand content - presale card */}
          <div className="lg:mr-4 flex justify-center relative">
            {/* <div className="publicSaleSectionBG sm:top-[120px]"></div> */}
            <div className=" lg:mt-12">
              <PresaleCard />
            </div>
          </div>
        </div>
      </section>
      {/* benefits of mining section */}
      <section id="about" className="max-w-[1440px] mx-auto mt-8 lg:mt-20">
        <div className="flex justify-center">
          <MineProTag />
        </div>
        <MotionDiv
          variants={fadeInVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-8 lg:mt-16"
        >
          <h2 className="mx-auto text-center creamTextGradient max-w-xl lg:max-w-[900px] text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[80px]">
            Benefits of Tokenizing Bitcoin Mining
          </h2>
        </MotionDiv>

        {/* benefits grid */}
        <div className="mt-24 grid gap-8 lg:grid-cols-2 px-8 lg:px-16">
          {/* Column 1 */}
          <div className="hidden lg:block">
            {/* image */}
            <div className="w-full md:w-2/3 h-[95%] min-h-[350px] md:min-h-[650px] relative">
              <Image
                src="/benefits.png"
                alt="Benefits image"
                objectFit="contain"
                fill
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-16">
            <MotionDiv
              variants={photoAnimDelay(0)}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"

              // viewport={{ once: true }}
            >
              <BenefitsCard
                image={"/icons/btc.png"}
                title="Highly profitable Bitcoin mining"
                description="Access profits from a highly profitable Bitcoin mining operation through our partnership with Logic Mining, which has a tested profitability of 10-20% per month just by staking our token, $MINE."
              />
            </MotionDiv>
            <MotionDiv
              variants={photoAnimDelay(1)}
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
            >
              <BenefitsCard
                image={"/icons/settings.png"}
                title="Fair management fees"
                description="We incorporate a 10% performance fee on all profits generated by our investment into Logic Mining's operation. That's 90% going back to stakers of the MINE token!"
              />
            </MotionDiv>
            <MotionDiv
              variants={photoAnimDelay(1)}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
            >
              <BenefitsCard
                image={"/icons/costs.png"}
                title="Lowest power costs"
                description="At 0.02 cents per kWh, we have access to some of the lowest power costs in the world through our partnership with Logic Mining. Power costs are the most important variable when it comes to Bitcoin mining, meaning we have a 95.71% higher profitability rate than an average Bitcoin mining operation."
              />
            </MotionDiv>
            <MotionDiv
              variants={photoAnimDelay(1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <BenefitsCard
                image={"/icons/shield.png"}
                title="Transparency & prior tests"
                description="Logic Mining's operation has been secured under contract for the next 5 years. That means as Bitcoin's price appreciates over time, MinePro will continue to remain profitable for years to come."
              />
            </MotionDiv>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 w-full">
          <Image
            src="/backgrounds/benefitsBackground.png"
            alt="Benefits background image"
            width={833}
            height={743}
            className="mx-auto"
          />
        </div>
      </section>
      {/* mining perfected info section */}
      <section
        id="presale"
        className="max-w-[1440px] mx-auto flex flex-col items-center md:flex-row md:justify-around mt-16 mb-24 sm:my-24 lg:my-[20px] px-8"
      >
        {/* left col - content */}
        <div>
          <MineProTag />
          <MotionDiv
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="mt-10 grayTextGradient max-w-xl lg:max-w-[700px] text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[80px]">
              Bitcoin Mining Perfected
            </h2>
          </MotionDiv>
          <MotionDiv
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p className="mt-6 max-w-[560px] text-white/60 text-[16px]">
              When it comes to Bitcoin mining the bottom line Is POWER. Low
              power cost = Higher Profit. That's why the team at MinePro has
              secured an incredible partnership with private enterprise energy
              provider Logic Mining. At an unbeatable 0.02 cents per kWh,
              MinePro is set to be amongst the most profitable BTC mining
              operations in the WORLD!
            </p>
          </MotionDiv>
          <div className="mt-10">
            <ScrollToTop />
          </div>
        </div>

        {/* right col - image */}
        <div className="w-full md:w-2/3 h-[95%]  min-h-[350px] md:min-h-[800px] relative">
          <Image
            src="/ASIC_Miningtool.png"
            alt="Mining Perfected"
            objectFit="contain"
            fill
          />
        </div>
      </section>
      {/* video section */}
      <section className="mt-8 lg:mt-14 relative">
        {/* absolute gradient */}
        <div className="hidden lg:block videoSectionBackground"></div>
        <div className="lg:hidden FAQSectionGradient1"></div>

        {/* content */}
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 flex flex-col items-center">
          <MineProTag />
          <MotionDiv
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="mt-10 creamTextGradient max-w-xl lg:max-w-[700px] text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[80px] text-center">
              Check out Dylan's trip to our Alberta facility
            </h2>
          </MotionDiv>
          <VideoPlayer />
        </div>
      </section>
      {/* how it works section */}
      <section className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:justify-around my-24 lg:mt-12 lg:mb-[180px] px-8 gap-12">
        {/* left col - content */}
        <div>
          <MineProTag />
          <MotionDiv
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="mt-10 grayTextGradient max-w-xl lg:max-w-[700px] text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[80px]">
              How It Works
            </h2>
          </MotionDiv>
          <MotionDiv
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p className="mt-6 max-w-[560px] text-white/60 text-[16px]">
              MinePro will be the first tokenized BTC mining project which will
              reward stakers every single month in BTC. The MINE token will
              serve as the deflationary governance token over the entire
              ecosystem. Holders will simply stake their MINE tokens into the
              staking pool and earn rewards in BTC every single month. It's that
              simple. The staking pool will payout based on time staked (longer
              stake, larger payout.)
            </p>
          </MotionDiv>
          <MotionDiv
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p className="mt-6 max-w-[560px] text-white/60 text-[16px]">
              All Presale contributors and airdrop recipients will have the
              opportunity to stake their tokens before TGE. If they choose to
              stake prior to liquidity creation there will be HUGE bonus
              multipliers on earnings! Remember that as stakers you'll always
              have the opportunity to unstake and move throughout the ecosystem.
              We're for the people, and support any decision as an investor you
              have, but we encourage staking because this is the best way to
              maximize earning in the ecosystem.
            </p>
          </MotionDiv>
        </div>

        {/* right col - image */}
        <div className="w-full  flex items-center md:w-1/4 h-[95%] sm:h-[65%] min-h-[200px] md:min-h-[600px] relative">
          <Image
            src="/COIN.gif"
            alt="how it works image"
            objectFit="cover"
            width={1500}
            height={1500}
            className=" w-full object-cover object-center h-full"
          />
        </div>
      </section>
      {/* reward system section */}
      <section className="my-[72px] relative">
        {/* <div className="heroSectionBG2"></div> */}{" "}
        {/* uncomment for grid lines bg */}
        {/* content */}
        <div className="px-8 lg:px-16 flex flex-col items-center">
          <MineProTag />
          <MotionDiv
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="mt-10 grayTextGradient max-w-xl lg:max-w-[700px] text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[80px] text-center">
              MinePro's Reward System
            </h2>
          </MotionDiv>
          <MotionDiv
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p className="mt-3 max-w-[870px] text-center text-white/60 text-[17px]">
              Currently each container loaded with Bitmain Antminer S21's are
              yielding an incredible 10-20% ROI every single month. The reason
              for this is our incredible rate of 0.02 cent per kWh, which is
              under contract for 5 years!
            </p>
          </MotionDiv>

          {/* visual section*/}
          <RewardSystemCard />
        </div>
      </section>
      {/* how to buy section */}
      <section
        id="how-to-buy"
        className="max-w-[1600px] mx-auto mt-[152px] mb-[72px] px-8 lg:px-16 flex flex-col items-center"
      >
        <MineProTag />
        <h2 className="mt-10 grayTextGradient max-w-xl lg:max-w-[700px] text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[80px] text-center">
          How to Buy MinePro
        </h2>

        {/* cards */}
        <div className="mt-[72px]">
          <HowToBuyItems />
        </div>
      </section>
      {/* partners section */}
      <section className="mt-12 lg:mt-[106px] lg:mb-[72px] flex flex-col items-center">
        <MineProTag />

        <div className="relative w-full ">
          <h2 className="z-[1] mx-auto mt-12 grayTextGradient max-w-xl lg:max-w-[700px] text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[80px] text-center">
            POWERED BY
          </h2>
          <div className="dottedGridPartnerContainer">
            <div className="w-full h-[126px] bg-gradient-to-b from-black to-transparent"></div>
            <Partners />
            <div className="w-full h-[140px] bg-gradient-to-t from-black to-transparent"></div>
          </div>
        </div>
      </section>
      {/* roadmap section */}
      <section
        id="roadmap"
        className="mb-24 lg:my-[142px] flex flex-col items-center"
      >
        <MineProTag />
        <h2 className="mt-10 grayTextGradient max-w-xl lg:max-w-[700px] text-[36px] sm:text-[48px] lg:text-[64px] xl:text-[80px] text-center">
          Roadmap
        </h2>
        <Roadmap />
      </section>
      {/* FAQ section */}
      <section
        id="faq"
        className="mt-[72px] px-8 lg:px-16 flex flex-col items-center relative"
      >
        {/* absolute gradients */}
        <div className="FAQSectionGradient1"></div>
        <div className="FAQSectionGradient2"></div>

        {/* content */}
        <MineProTag />
        <h2 className="mt-10 grayTextGradient max-w-xl lg:max-w-[700px] text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[80px] text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 sm:mt-[72px] mb-[106px] flex flex-col items-center gap-8 w-full">
          <FAQCard
            title="What is MinePro?"
            description="MinePro is a next level, tokenized, Bitcoin mining ecosystem which grants token holders access to passive profits from one of the lowest power cost Bitcoin mining operations in existence, a mining-revenue powered play-to-earn game, and more through our deflationary native token, $MINE."
          />
          <FAQCard
            title="Where can I buy $MINE"
            description="You're early! If you're reading this, you're able to try to gain early exposure to $MINE in our upcoming limited Presale, make sure to stay updated with us on Twitter and Discord for more information."
          />
          <FAQCard
            title="What is the profit potential?"
            description="MinePro Presale participants gain a guaranteed 2x profit on token launch. Once we have purchased, shipped, and started running the ASICs, stakers will gain a 10-20% expected non-compounded profit in pure BTC rewards. Compounded, that's around a 15,000% return in 3 years! Passively!"
          />
          <FAQCard
            title="Is this for real?"
            description="Although the team has a proven track record of success, their most important core value is TRANSPARENCY. You can view our Director of Operations, Dylan, filming his trip out to Alberta where he checked out the hundreds of mining machines (ASICs) in action mining Bitcoin."
          />
        </div>
      </section>
      {/* join our community section */}
      {/* joinOurCommunityBG */}
      <section className=" joinOurCommunityBG  pt-32 pb-20">
        <div className="max-w-[1440px] overflow-hidden  glassCard h-[370px] flex flex-col items-center justify-center gap-8 mx-4 sm:mx-8 lg:mx-auto rounded-2xl">
          <Grid />
          <h2 className="grayTextGradient text-center text-nowrap max-w-xl lg:max-w-[700px] text-[30px] sm:text-[44px] lg:text-[60px] xl:text-[72px]">
            Join Our Community
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 justify-center gap-4 sm:gap-8 lg:gap-16">
            <div className="h-full">
              <ScrollToTop fullHeight />
            </div>
            <a
              href="https://discord.com/invite/dWtWJjwNYy"
              rel="noreferrer"
              target="_blank"
              className="orangeButton"
            >
              <p>Join Our Discord</p>
            </a>
            <a
              href="https://t.me/MineProBitcoin"
              target="_blank"
              rel="noreferrer"
              className="orangeButton lg:col-span-1 col-span-2 place-self-center"
            >
              Join Our Telegram
            </a>
          </div>
          <div className="heroSectionBG4"></div> {/* grid lines */}
        </div>
      </section>
    </main>
  );
}