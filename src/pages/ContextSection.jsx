import { motion } from "framer-motion";
import {
  ComputerDesktopIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

export function ContextSection() {
  const contextData = [
    {
      icon: <ComputerDesktopIcon className="w-8 h-8 text-beige" />,
      title: "Đặc điểm",
      description:
        "Thông tin đa chiều, mạng xã hội phát triển, giới trẻ tiếp nhận nhiều trào lưu toàn cầu, dễ bị ảnh hưởng bởi tin giả.",
      bg: "bg-gray-800",
    },
    {
      icon: <ExclamationTriangleIcon className="w-8 h-8 text-beige" />,
      title: "Thách thức",
      description:
        "Niềm tin vào các thiết chế xã hội, kể cả Đảng, có thể bị thử thách nếu không kịp đổi mới phương thức lãnh đạo và gần gũi với nhân dân.",
      bg: "bg-red-800",
    },
    {
      icon: <LightBulbIcon className="w-8 h-8 text-beige" />,
      title: "Cơ hội",
      description:
        "Công nghệ số mở ra khả năng tiếp cận tri thức toàn cầu, tăng cường đối thoại giữa Đảng, Nhà nước với nhân dân, và thúc đẩy sự minh bạch.",
      bg: "bg-green-800",
    },
    {
      icon: <ArrowTrendingUpIcon className="w-8 h-8 text-beige" />,
      title: "Định hướng",
      description:
        "Vận dụng tư tưởng Hồ Chí Minh để xây dựng một Nhà nước dân chủ hiện đại, ứng dụng công nghệ số nhằm đảm bảo 'dân là chủ, dân làm chủ'.",
      bg: "bg-blue-800",
    },
  ];

  return (
    <motion.section
      className=" min-h-screen py-20 px-6 bg-gradient-to-br from-brand-red-dark to-gray-900  text-beige"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-beige mb-12 text-center drop-shadow-md">
        Bối cảnh thời đại 4.0
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {contextData.map((item, idx) => (
          <motion.div
            key={idx}
            className={`p-6 rounded-xl shadow-lg ${item.bg} hover:scale-105 transition-transform duration-300 relative overflow-hidden`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.3, duration: 0.8 }}
          >
            <div className="absolute -top-5 -left-5 opacity-20">{item.icon}</div>
            <div className="flex items-center mb-4">
              {item.icon}
              <h3 className="text-xl font-semibold ml-3 text-beige">
                {item.title}
              </h3>
            </div>
            <p className="text-beige/90">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.blockquote
        className="mt-12 max-w-3xl mx-auto text-center text-beige/80 italic border-l-4 border-beige/40 pl-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        “Trong thời đại mới, dân chủ phải gắn với công nghệ số, để mọi người dân đều có tiếng nói và quyền giám sát.”
      </motion.blockquote>

      <motion.p
        className="mt-8 max-w-4xl mx-auto text-center text-beige/70 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Thời đại 4.0 không chỉ mang đến thách thức mà còn mở ra cơ hội lớn để
        khẳng định tinh thần Hồ Chí Minh: xây dựng một Nhà nước thực sự của dân,
        do dân và vì dân, biết lắng nghe, đối thoại, minh bạch và đổi mới liên tục.
      </motion.p>
    </motion.section>
  );
}
