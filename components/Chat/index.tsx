import Styles from './index.module.css'

export const Chat: React.VFC = () => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img
          className="h-12 w-12"
          src="https://dlskits.com/wp-content/uploads/2018/05/Dream-League-Soccer-Barcelona-Logo.png.webp"
          alt="ChitChat Logo"
        />
      </div>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-gray-500">You have a new message!</p>
        <p className={Styles['chat-color']}>chat-color</p>
      </div>
    </div>
  )
}
