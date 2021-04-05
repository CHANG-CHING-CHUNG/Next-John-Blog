import Image from 'next/image';

export default function SideBar() {
  return (
    <div className="transform translate-y-12 hidden fixed w-full xl:flex justify-center">
      <div className="mx-10 max-w-screen-xl w-full">
        <div className="w-48 border-solid border-2 shadow-md p-5 flex flex-col justify-center items-center">
          <div className="flex-shrink-0">
            <Image
            src="/images/profile_cycle.png"
            height={150}
            width={150}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h5 className="w-full mb-3 text-center">John</h5>
            <p className="text-gray-500">
              電影、影集愛好者，對很多事物都抱持者好奇心，
              也因此想學很多有趣的事情，不過卻常常因為時間太少而做罷。
              閒暇時在家拿者組裝啞鈴重訓，期待這樣就能變超壯，
              結果脂肪比肌肉多XD
              喜歡吸收知識並且幫忙解答他人問題，期望自己能成為萬事通!?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}