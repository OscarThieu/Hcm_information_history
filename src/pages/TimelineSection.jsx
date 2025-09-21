import { motion } from "framer-motion";
import { useState } from "react";

const timelineData = [
    {
        year: "1930",
        title: "Đảng ra đời",
        desc: "Nguyễn Ái Quốc sáng lập Đảng – bước ngoặt lịch sử cách mạng Việt Nam, lãnh đạo nhân dân giành độc lập.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQi1WiceswfejpfI-qpg53o-ysZOW1LkYNFTF9HV4rX80KlLAdCue5ax5bWiCc2Rh6-EE&usqp=CAU",
        quote: "Khởi đầu một thời kỳ cách mạng vẻ vang.",
    },
    {
        year: "1945",
        title: "Cách mạng Tháng Tám",
        desc: "Đảng vừa lãnh đạo vừa là đầy tớ trung thành của nhân dân, củng cố niềm tin dân tộc.",
        img: "https://quocphongthudo.vn/upload/2001606/fck/tranhienmy/%E1%BA%A2nh%201%20(1).jpg",
        quote: "Niềm tin của dân tộc được củng cố.",
    },
    {
        year: "1951 – 1969",
        title: "Đảng là đạo đức, là văn minh",
        desc: "Hồ Chí Minh nhấn mạnh phòng chống quan liêu, xa dân, giữ Đảng trong sạch và tiên phong.",
        img: "https://a.tcnn.vn//Images/images/3e87456c9fcc6321d19ce73cba75024b.jpg",
        quote: "Đạo đức và văn minh làm nền tảng cho Đảng.",
    },
    {
        year: "1986",
        title: "Công cuộc Đổi mới",
        desc: "Đảng tự đổi mới, thích ứng bối cảnh kinh tế – xã hội mới, giữ vững định hướng xã hội chủ nghĩa.",
        img: "https://images.hcmcpv.org.vn/res/news/2022/08/10-08-2022-dang-cong-san-viet-nam-lanh-dao-cong-cuoc-doi-moi-kinh-te-dat-nuoc-871BC0B.jpg",
        quote: "Bước ngoặt đưa Việt Nam hội nhập quốc tế.",
    },
    {
        year: "2016 – Nay",
        title: "Thích ứng thời đại 4.0",
        desc: "Phòng chống tham nhũng, minh bạch hóa hoạt động, sử dụng công nghệ số, khơi dậy niềm tin giới trẻ.",
        img: "https://bcp.cdnchinhphu.vn/334894974524682240/2024/8/19/thamnhung-122024-17240410345471189095600.jpg",
        quote: "Công nghệ số và minh bạch là chìa khóa.",
    },
];

export function TimelineSection() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="relative bg-gradient-to-b from-red-900 via-red-700 to-red-200 py-24 overflow-visible">
            {/* SVG background shapes */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <circle cx="20%" cy="10%" r="80" fill="rgba(255, 215, 0, 0.2)" /> {/* vàng đồng */}
                <circle cx="80%" cy="90%" r="100" fill="rgba(255, 215, 0, 0.15)" />
                <circle cx="50%" cy="50%" r="150" fill="rgba(255, 215, 0, 0.1)" />
            </svg>

            <section className="relative max-w-7xl mx-auto z-10">
                {/* Center gradient line */}
                <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-red-800 to-yellow-600 -translate-x-1/2"></div>

                <div className="relative flex flex-col space-y-32">
                    {timelineData.map((item, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <div key={index} className="relative flex w-full items-center">
                                {/* Marker */}
                                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-500 rounded-full z-20"></span>

                                <motion.div
                                    className={`relative cursor-pointer md:w-5/12 w-11/12 ${isLeft ? "ml-auto" : "mr-auto"
                                        } rounded-2xl overflow-visible shadow-xl`}
                                    onHoverStart={() => setHoveredIndex(index)}
                                    onHoverEnd={() => setHoveredIndex(null)}
                                    initial={{ opacity: 0, x: isLeft ? -120 : 120 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(0,0,0,0.25)" }}
                                >
                                    {/* Image */}
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-64 object-cover rounded-t-2xl"
                                    />

                                    {/* Hover overlay */}
                                    {hoveredIndex === index && (
                                        <motion.div
                                            className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-80 bg-red-100 border border-red-700 rounded-xl p-5 shadow-lg text-red-800 z-[100]"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <h2 className="text-lg font-bold">{item.year}</h2>
                                            <h3 className="text-md font-semibold">{item.title}</h3>
                                            <p className="mt-2 text-sm">{item.desc}</p>
                                            <p className="mt-2 text-xs italic text-yellow-600">“{item.quote}”</p>
                                        </motion.div>
                                    )}

                                    {/* Content */}
                                    <div className="p-6 bg-white border-l-4 border-red-700">
                                        <h2 className="text-xl font-bold text-red-800">{item.year}</h2>
                                        <h3 className="text-lg font-semibold mt-1 text-red-700">{item.title}</h3>
                                        <p className="text-gray-700 mt-1">{item.desc}</p>
                                        <p className="mt-2 text-yellow-600 italic text-center">{item.quote}</p>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
