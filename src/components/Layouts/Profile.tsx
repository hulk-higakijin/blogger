import Image from 'next/image'

const ProfileComponent = () => {
  return (
    <div className="flex my-10 md:my-20">
      <div className="mx-auto flex md:flex-col gap-4">
        <div className="w-fit h-fit mx-auto">
          <Image
            src="https://pbs.twimg.com/profile_images/1388720052862525444/6Ge2RLYf_400x400.jpg"
            width={200}
            height={200}
            alt="profile"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2 my-auto">
          <p className="text-xl md:mx-auto">ライター： 真庭治久</p>
          <p className="text-gray-500 text-sm md:mx-auto">
            元 DMM WEB CAMP メンター。
            <br />
            現在フォースタートアップス株式会社でサーバーサイドエンジニアとして活動。
            <br />
            神奈川大学 経営学部 国際経営学科 2年
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProfileComponent
