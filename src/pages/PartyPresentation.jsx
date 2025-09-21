import { motion } from "framer-motion";

const timelineData = [
  {
    year: "1930",
    title: "Đảng Cộng sản Việt Nam ra đời",
    desc: "Hồ Chí Minh sáng lập Đảng – bước ngoặt lịch sử của cách mạng Việt Nam, khẳng định chỉ có Đảng cách mạng chân chính mới lãnh đạo nhân dân giành độc lập.",
  },
  {
    year: "1945",
    title: "Cách mạng Tháng Tám thành công",
    desc: "Đảng vừa là người lãnh đạo vừa là đầy tớ trung thành của nhân dân, xây dựng niềm tin dân tộc.",
  },
  {
    year: "1951 – 1969",
    title: "Đảng là đạo đức, là văn minh",
    desc: "Hồ Chí Minh nhấn mạnh sự trong sạch, tiên phong của Đảng, phòng chống quan liêu, xa dân và thoái hóa.",
  },
  {
    year: "1986",
    title: "Thời kỳ Đổi mới",
    desc: "Đảng tự đổi mới, thích ứng bối cảnh kinh tế – xã hội mới, đồng thời giữ vững định hướng xã hội chủ nghĩa.",
  },
  {
    year: "2016 – nay",
    title: "Thích ứng thời đại 4.0",
    desc: "Đẩy mạnh phòng chống tham nhũng, minh bạch hóa hoạt động, sử dụng công nghệ số, lan tỏa giá trị tích cực và khơi dậy niềm tin giới trẻ.",
  },
];

export default function PartyPresentation() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-red-100 via-yellow-50 to-red-50 text-gray-800 flex flex-col">
      
      {/* Content */}
      <div className="z-10 flex-1 flex flex-col justify-center px-6 py-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-red-700 drop-shadow-lg"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          “Đảng ta là đạo đức, là văn minh” – Hồ Chí Minh
        </motion.h1>

        <motion.p
          className="text-center text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Trong thời kỳ hội nhập và cách mạng công nghiệp 4.0, Đảng cần vừa giữ bản chất cách mạng, vừa đổi mới phương thức lãnh đạo và khơi dậy niềm tin của thanh niên.
        </motion.p>

        {/* Timeline */}
        <div className="relative flex flex-col items-center">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-red-400 to-yellow-400 -translate-x-1/2"></div>

          <div className="space-y-16 w-full">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className={`flex w-full ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
              >
                <div className="bg-white shadow-xl p-6 rounded-2xl md:w-5/12 w-11/12 relative">
                  {/* Icon */}
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-3xl">
                    🚩
                  </span>

                  {/* Text content */}
                  <h2 className="text-xl font-bold text-red-600">{item.year}</h2>
                  <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-700 mb-4">
            Thông điệp cốt lõi
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-800 leading-relaxed">
            Đảng vừa giữ đạo đức, vừa tiên phong, đổi mới nhưng không xa rời nhân dân.  
            Sử dụng công nghệ và phát huy vai trò thanh niên để củng cố niềm tin và phát triển đất nước.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
