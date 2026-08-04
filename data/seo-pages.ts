export type SeoFaq = { question: string; answer: string };

export type SeoPage = {
  slug: string;
  label: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  image: string;
  imageAlt: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
  faqs: SeoFaq[];
  related: string[];
};

export const seoPages: SeoPage[] = [
  {
    slug: "thue-xe-tu-lai-hue",
    label: "Thuê xe tự lái Huế",
    title: "Thuê xe tự lái Huế | Đặt xe theo ngày tại TRẠM NHÀ MINT",
    description: "Thuê xe tự lái Huế với lựa chọn xe điện VinFast và xe xăng. Xem đội xe, giá theo ngày và liên hệ TRẠM NHÀ MINT để xác nhận lịch.",
    h1: "Thuê xe tự lái Huế cho hành trình chủ động của bạn",
    lead: "Trang thông tin dành cho khách cần chọn xe theo lịch riêng tại Huế, xem dữ liệu đội xe hiện có và nhận xác nhận qua Hotline hoặc Zalo.",
    image: "/images/tram-nha-minh-fleet.webp",
    imageAlt: "Đội xe tự lái TRẠM NHÀ MINT tại Huế gồm VinFast và Honda City",
    sections: [
      { heading: "Chủ động lịch trình khi đi lại tại Huế", paragraphs: [
        "Thuê xe tự lái Huế phù hợp khi bạn muốn tự quyết giờ nhận xe, lộ trình và nhịp di chuyển của chuyến đi. Thay vì phụ thuộc vào một khung giờ cố định, bạn có thể chọn xe theo số người, điểm đến và ngày sử dụng dự kiến. Huế có khu vực trung tâm, điểm tham quan, ga tàu và sân bay; vì vậy việc chuẩn bị lịch trước giúp việc nhận xe thuận tiện hơn. TRẠM NHÀ MINT tiếp nhận nhu cầu qua Hotline hoặc Zalo để kiểm tra lịch xe thực tế trước khi xác nhận.",
        "Điểm quan trọng của một chuyến thuê xe theo ngày là chọn đúng nhu cầu, không chỉ chọn theo kiểu dáng. Nhóm nhỏ thường quan tâm xe gọn, dễ di chuyển; gia đình có thể cần thêm chỗ ngồi hoặc khoang hành lý; còn khách đi nhiều điểm trong ngày nên cân nhắc mức sử dụng và lịch sạc nếu chọn xe điện. Danh sách trên website hiển thị thông số cơ bản, giá tham khảo và trạng thái hiện có để bạn bắt đầu so sánh một cách rõ ràng." ] },
      { heading: "Đội xe hiện có và cách chọn xe", paragraphs: [
        "Đội xe của TRẠM NHÀ MINT có các mẫu VinFast VF 3, VF e34, VF 5, VF 6, VF 8, VF 9, Limo Green và Honda City theo dữ liệu website. Mỗi mẫu có số chỗ, loại nhiên liệu, hộp số và mức giá theo ngày riêng. Những thông tin này giúp bạn lọc nhanh giữa xe điện VinFast tự lái và xe xăng, sau đó liên hệ để biết xe có sẵn đúng ngày nhận hay không. Giá hiển thị là mức tham khảo; lịch và tình trạng xe luôn được xác nhận trước khi đặt.",
        "Không nên chọn xe chỉ vì giá thấp nhất hoặc vì một tính năng riêng lẻ. Hãy cân nhắc số người ngồi thực tế, hành lý, quãng đường dự kiến và việc có cần giao xe theo lịch hay không. Nếu chưa chắc giữa xe 4 chỗ, 5 chỗ và 7 chỗ, bạn có thể mở các trang chuyên mục bên dưới để xem nội dung phù hợp hơn. Cách chuẩn bị này giúp cuộc trao đổi với đơn vị cho thuê ngắn gọn và tránh thay đổi kế hoạch sát giờ." ] },
      { heading: "Chuẩn bị thông tin trước khi liên hệ", paragraphs: [
        "Để được tư vấn nhanh, bạn nên gửi ngày nhận, ngày trả, mẫu xe quan tâm và điểm nhận xe dự kiến. Với nhu cầu giao nhận tại nhà, sân bay, ga tàu hoặc bến xe, thời gian dự kiến là thông tin cần thiết để đơn vị kiểm tra khả năng phục vụ. Website không tự động chốt lịch hay báo tình trạng trống theo thời gian thực; Zalo và Hotline là kênh xác nhận cuối cùng để thông tin không bị sai lệch.",
        "Sau khi đã chọn được một hoặc vài phương án, hãy đọc phần lưu ý thuê xe và điều khoản được trao đổi khi liên hệ. Nội dung trên website được trình bày để hỗ trợ khách tìm hiểu, không thay thế cho xác nhận thực tế của chuyến thuê. Cách làm này giữ thông tin minh bạch: bạn nhìn thấy giá, thông số và các lựa chọn trước; đội ngũ tiếp nhận kiểm tra lại lịch xe sau. Đây là nền tảng phù hợp cho cả khách thuê ngắn hạn Huế lẫn khách lên kế hoạch nhiều ngày." ] },
      { heading: "Kết nối nhanh với TRẠM NHÀ MINT", paragraphs: [
        "Sau khi tham khảo, bạn có thể gọi 0986 789 715 hoặc nhắn Zalo để gửi lịch dự kiến. Nếu bạn cần xem vị trí doanh nghiệp, khu vực Liên hệ trên website có bản đồ Google Maps và nút chỉ đường. Các trang giá xe, xe VinFast, xe điện, xe 4 chỗ và xe 7 chỗ được liên kết nội bộ để khách có thể quay lại so sánh mà không phải tìm kiếm lại từ đầu.",
        "Việc xây dựng một trang thông tin riêng cho dịch vụ thuê xe tự lái tại Huế nhằm giúp người tìm kiếm hiểu đúng phạm vi phục vụ trước khi liên hệ. Nội dung tập trung vào lựa chọn xe, giá theo ngày, cách xác nhận lịch và giao nhận theo thông tin đã công bố. Khi có thay đổi về đội xe hoặc giá, dữ liệu hiển thị trên trang danh sách và bảng giá là nơi khách nên tham khảo đầu tiên." ] },
      ],
    faqs: [
      { question: "Thuê xe tự lái Huế nên liên hệ trước bao lâu?", answer: "Bạn nên liên hệ ngay khi có ngày nhận và ngày trả dự kiến để kiểm tra lịch xe. Website chỉ hiển thị thông tin tham khảo; tình trạng xe được xác nhận qua Hotline hoặc Zalo." },
      { question: "Website có những dòng xe tự lái nào?", answer: "Danh sách hiện có VinFast VF 3, VF e34, VF 5, VF 6, VF 8, VF 9, Limo Green và Honda City. Thông số từng xe được hiển thị trong mục Danh sách xe." },
      { question: "Giá thuê xe được tính như thế nào?", answer: "Giá tham khảo được hiển thị theo ngày cho từng mẫu xe. Tổng giá và lịch xe được xác nhận theo ngày nhận, ngày trả và tình trạng xe thực tế." },
      { question: "Có thể hỏi giao nhận tại sân bay hoặc ga tàu không?", answer: "Bạn có thể gửi địa điểm và thời gian dự kiến để đơn vị kiểm tra, vì việc giao nhận được xác nhận theo từng lịch cụ thể." },
    ],
    related: ["thue-xe-vinfast-hue", "bang-gia", "lien-he"],
  },
  {
    slug: "thue-xe-vinfast-hue",
    label: "Thuê xe VinFast Huế",
    title: "Thuê xe VinFast Huế | Xe điện tự lái theo ngày",
    description: "Tìm hiểu thuê xe VinFast Huế: các mẫu VF 3, VF e34, VF 5, VF 6, VF 8, VF 9 và Limo Green theo dữ liệu đội xe TRẠM NHÀ MINT.",
    h1: "Thuê xe VinFast Huế: xem lựa chọn xe điện tự lái",
    lead: "Khám phá các mẫu VinFast hiện có trong đội xe, cách đọc thông số và những điểm nên xác nhận trước khi lên lịch thuê tại Huế.",
    image: "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2024/05/2024-vinfast-vf6-9.jpg",
    imageAlt: "VinFast VF 6 màu trắng dùng minh hoạ cho dịch vụ thuê xe VinFast Huế",
    sections: [
      { heading: "Vì sao khách tìm thuê xe VinFast tại Huế", paragraphs: [
        "Nhu cầu thuê xe VinFast Huế thường đến từ khách muốn trải nghiệm xe điện trong một lịch trình ngắn ngày, khách gia đình cần xe số tự động hoặc người đã quen dùng các mẫu VinFast. Thay vì xem tất cả dòng xe cùng lúc, trang này tập trung vào những mẫu VinFast đang có trong danh sách của TRẠM NHÀ MINT. Khách có thể so sánh số chỗ, mức giá tham khảo theo ngày và tình trạng hiển thị trước khi nhắn tin xác nhận.",
        "VinFast trong đội xe không chỉ có một kiểu dáng. VF 3 là lựa chọn nhỏ gọn; VF e34, VF 5 và VF 6 phù hợp nhu cầu xe 5 chỗ; VF 8 là lựa chọn cỡ lớn hơn; VF 9 và Limo Green nằm trong nhóm nhiều chỗ ngồi hơn theo dữ liệu website. Mỗi người sẽ có tiêu chí khác nhau, vì vậy danh sách xe nên được xem là điểm bắt đầu cho cuộc trao đổi, không phải cam kết xe luôn trống vào mọi thời điểm." ] },
      { heading: "Cách đọc thông tin mẫu xe VinFast", paragraphs: [
        "Mỗi thẻ xe trên website nêu tên xe, số chỗ, hộp số, loại nhiên liệu, khoảng sử dụng hiển thị và giá tham khảo. Với xe điện VinFast tự lái, khách nên quan tâm lộ trình ngày dự kiến, thời gian di chuyển và khả năng sắp xếp sạc phù hợp. Những thông tin này hữu ích hơn việc chỉ nhìn vào hình ảnh, đặc biệt khi bạn có kế hoạch đi nhiều điểm hoặc cần chở hành lý.",
        "Giá theo ngày được lấy từ dữ liệu đội xe và có thể thay đổi theo lịch xác nhận. Vì thế, khi chọn một mẫu VinFast, hãy gửi đúng ngày nhận, ngày trả cùng số người đi. Nếu đang phân vân giữa hai xe, bạn có thể gửi cả hai tên xe để được kiểm tra phương án. Cách hỏi rõ ràng giúp tránh hiểu nhầm giữa mức giá hiển thị, tình trạng xe và dịch vụ giao nhận theo lịch." ] },
      { heading: "Lựa chọn theo số người và hành trình", paragraphs: [
        "Một chuyến đi hai đến bốn người có thể ưu tiên xe nhỏ gọn; nhóm năm người cần xem thêm không gian ngồi và hành lý; nhóm đông hơn có thể tìm hiểu nhóm 7 chỗ. Không nên mặc định một mẫu xe phù hợp mọi chuyến đi. Nếu lịch trình tập trung trong thành phố, yếu tố linh hoạt khi đỗ xe có thể quan trọng; nếu đi cùng gia đình hoặc có nhiều hành lý, không gian thực tế lại nên được đặt lên trước.",
        "Khách cũng nên tính đến việc xe điện phù hợp với thói quen sử dụng của mình hay không. Website mô tả lợi ích miễn phí sạc pin theo thông tin giới thiệu, nhưng việc bố trí hành trình cụ thể vẫn cần được trao đổi khi xác nhận xe. TRẠM NHÀ MINT không công bố lịch trình mẫu hay mức tiêu thụ cố định; do đó trang này không đưa ra con số ước lượng vượt ngoài dữ liệu hiện có." ] },
      { heading: "Từ tham khảo đến xác nhận lịch xe", paragraphs: [
        "Sau khi chọn được mẫu VinFast quan tâm, bước tiếp theo là liên hệ qua Hotline hoặc Zalo. Hãy cho biết bạn cần xe trong bao nhiêu ngày, nhận ở đâu và có yêu cầu thời gian nào cần lưu ý. Đội ngũ sẽ kiểm tra xe đang sẵn có trước khi phản hồi. Nếu mẫu đầu tiên không phù hợp lịch, bạn có thể cân nhắc các dòng VinFast khác hoặc chuyển sang Honda City trong danh sách chung.",
        "Trang thuê xe VinFast Huế được liên kết với trang xe điện, xe 4 chỗ, xe 7 chỗ và bảng giá để người đọc đi sâu theo nhu cầu. Liên kết nội bộ giúp Google và khách hàng hiểu mối quan hệ giữa từng chuyên mục, đồng thời tránh việc lặp lại cùng một nội dung trên mọi trang. Mỗi trang chỉ tập trung vào một ý định tìm kiếm và luôn khuyến khích xác nhận thông tin thực tế trước khi đặt xe." ] },
      ],
    faqs: [
      { question: "TRẠM NHÀ MINT có những mẫu VinFast nào?", answer: "Dữ liệu website hiện liệt kê VF 3, VF e34, VF 5, VF 6, VF 8, VF 9 và Limo Green. Tình trạng từng xe cần được xác nhận theo ngày thuê." },
      { question: "Thuê xe VinFast Huế có phải tất cả đều là xe điện không?", answer: "Các mẫu VinFast hiển thị trong danh sách là xe điện. Website cũng có Honda City là lựa chọn xe xăng riêng." },
      { question: "Tôi nên chọn VF 3 hay VF 5?", answer: "Bạn nên dựa trên số người, hành lý và lộ trình. Hãy xem số chỗ, thông tin xe và nhắn Zalo để được kiểm tra lịch của mẫu phù hợp." },
      { question: "Có thể xem giá xe VinFast theo ngày ở đâu?", answer: "Bạn có thể xem tại mục Danh sách xe hoặc Bảng giá. Đây là giá tham khảo, tổng giá được xác nhận khi có lịch nhận và trả xe." },
    ],
    related: ["thue-xe-dien-hue", "thue-xe-4-cho-hue", "bang-gia"],
  },
  {
    slug: "thue-xe-dien-hue",
    label: "Thuê xe điện Huế",
    title: "Thuê xe điện Huế | VinFast tự lái theo lịch xác nhận",
    description: "Thuê xe điện Huế với các mẫu VinFast tự lái đang có trong đội xe TRẠM NHÀ MINT. Xem thông số, giá theo ngày và liên hệ xác nhận lịch.",
    h1: "Thuê xe điện Huế: chọn xe tự lái phù hợp chuyến đi",
    lead: "Nội dung dành cho khách muốn tìm hiểu xe điện VinFast tự lái, cách chuẩn bị lộ trình và những thông tin cần xác nhận trước khi nhận xe.",
    image: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw2df39a3f/images/PDP/VF5/vf5-7.png",
    imageAlt: "VinFast VF 5 minh hoạ cho dịch vụ thuê xe điện Huế",
    sections: [
      { heading: "Thuê xe điện phù hợp với kiểu hành trình nào", paragraphs: [
        "Thuê xe điện Huế là một lựa chọn khi bạn muốn sử dụng xe số tự động và chủ động thời gian di chuyển. Thay vì xem xe điện như một khái niệm chung, khách nên bắt đầu bằng lịch trình thực tế: đi trong thành phố hay đi nhiều điểm, số người ngồi, lượng hành lý và thời gian nhận trả. Những câu hỏi này giúp việc chọn mẫu xe điện VinFast tự lái có cơ sở hơn, đồng thời giúp đơn vị cho thuê kiểm tra lịch xe đúng nhu cầu.",
        "Website của TRẠM NHÀ MINT hiển thị nhiều dòng VinFast ở các nhóm kích thước khác nhau. Có mẫu gọn cho nhóm nhỏ, có mẫu 5 chỗ và các lựa chọn nhiều chỗ hơn. Mỗi thẻ xe có thông tin về số chỗ, hộp số, loại nhiên liệu, giá tham khảo và trạng thái. Đây là nguồn tham khảo ban đầu; khách không nên suy ra lịch trống hoặc chi phí cuối cùng chỉ từ một thẻ xe, bởi những điều này phải được xác nhận theo ngày thực tế." ] },
      { heading: "Lên kế hoạch sử dụng xe điện tự lái", paragraphs: [
        "Khi đi xe điện, lịch trình và thói quen sử dụng có ý nghĩa đặc biệt. Bạn nên xác định các chặng di chuyển chính trong ngày, thời gian dừng và thời điểm trả xe dự kiến. Website không thay thế tư vấn hành trình hay công bố mạng lưới điểm sạc; vì vậy, nếu có yêu cầu riêng về quãng đường, hãy trao đổi trực tiếp trước khi nhận xe. Điều này giúp hai bên thống nhất thông tin phù hợp thay vì dựa vào giả định.",
        "Thông tin đội xe có ghi ưu đãi miễn phí sạc pin theo nguồn giới thiệu. Tuy nhiên, điều đó không có nghĩa mọi tình huống sử dụng đều giống nhau. Điều kiện của chuyến thuê, lịch giao nhận và hướng dẫn cụ thể sẽ được làm rõ khi bạn liên hệ. Cách trình bày thận trọng này giúp nội dung hữu ích cho người tìm thuê xe điện tại Huế mà không đưa ra lời hứa vượt quá dữ liệu hiện có." ] },
      { heading: "So sánh xe điện theo nhu cầu", paragraphs: [
        "Nếu bạn đi một hoặc hai người và ưu tiên sự nhỏ gọn, hãy mở trang xe 4 chỗ để so sánh các lựa chọn phù hợp. Nếu đi cùng gia đình đông người, trang xe 7 chỗ giúp bạn xem nhóm xe nhiều chỗ hơn. Trang thuê xe VinFast Huế lại phù hợp khi bạn muốn xem toàn bộ các dòng VinFast có trong danh sách. Những đường dẫn này tạo thành hành trình tìm hiểu rõ ràng thay vì dồn tất cả thông tin vào một trang.",
        "Khi so sánh, hãy ưu tiên các yếu tố có thể kiểm chứng: số chỗ, tên xe, giá theo ngày và trạng thái hiển thị. Hình ảnh chỉ có vai trò minh hoạ cho mẫu xe. Sau khi đã chọn được hai hoặc ba phương án, hãy gửi tên xe kèm ngày dự kiến qua Zalo. Cách làm này tiết kiệm thời gian hơn là hỏi chung chung về xe điện, vì nhân viên có thể trả lời dựa trên lịch xe tại thời điểm đó." ] },
      { heading: "Liên hệ để kiểm tra xe điện còn lịch", paragraphs: [
        "Để bắt đầu, bạn có thể gọi 0986 789 715 hoặc nhắn Zalo. Nội dung nên bao gồm ngày nhận, ngày trả, số người đi và mẫu VinFast bạn đang cân nhắc. Nếu muốn giao nhận tại nhà, sân bay, ga tàu hoặc bến xe, hãy nêu thời gian dự kiến để được kiểm tra. Việc giao nhận được xác nhận theo lịch, không phải là lựa chọn tự động trong biểu mẫu website.",
        "Trang này được tạo để hỗ trợ người tìm kiếm thuê xe điện Huế hiểu đúng dịch vụ trước khi liên hệ. Nó không sử dụng thông tin về quãng đường, tốc độ hay ưu đãi ngoài dữ liệu đội xe. Khi bạn cần thông tin chính xác cho một ngày cụ thể, xác nhận trực tiếp luôn là bước đáng tin cậy nhất. Bạn cũng có thể xem bảng giá để biết các mức tham khảo đang hiển thị trên website." ] },
      ],
    faqs: [
      { question: "Thuê xe điện Huế có những mẫu nào?", answer: "Website hiện có các mẫu VinFast VF 3, VF e34, VF 5, VF 6, VF 8, VF 9 và Limo Green theo danh sách đội xe." },
      { question: "Tôi cần cung cấp gì khi hỏi thuê xe điện?", answer: "Hãy gửi ngày nhận, ngày trả, số người đi, mẫu xe quan tâm và điểm nhận xe dự kiến để được kiểm tra lịch." },
      { question: "Giá xe điện có hiển thị trên website không?", answer: "Có. Giá được hiển thị theo ngày trong danh sách xe và bảng giá, sau đó được xác nhận lại theo lịch thực tế." },
      { question: "Có thể giao xe điện tại sân bay Phú Bài không?", answer: "Bạn có thể yêu cầu theo thời gian dự kiến. Khả năng giao nhận và mẫu xe được xác nhận khi liên hệ." },
    ],
    related: ["thue-xe-vinfast-hue", "thue-xe-san-bay-phu-bai", "thue-xe-7-cho-hue"],
  },
  {
    slug: "thue-xe-san-bay-phu-bai",
    label: "Thuê xe sân bay Phú Bài",
    title: "Thuê xe sân bay Phú Bài | Xác nhận lịch giao xe tại Huế",
    description: "Thông tin thuê xe tại sân bay Phú Bài: chọn xe, gửi giờ bay dự kiến và xác nhận lịch giao nhận cùng TRẠM NHÀ MINT.",
    h1: "Thuê xe sân bay Phú Bài theo lịch xác nhận",
    lead: "Hướng dẫn chuẩn bị thông tin khi cần nhận hoặc trả xe theo lịch tại sân bay Phú Bài, kết nối với đội xe tự lái tại Huế.",
    image: "/images/gallery/1.jpg",
    imageAlt: "Xe Honda City trong thư viện đội xe TRẠM NHÀ MINT tại Huế",
    sections: [
      { heading: "Chuẩn bị lịch bay và thời gian nhận xe", paragraphs: [
        "Khi cần thuê xe sân bay Phú Bài, thông tin quan trọng nhất là thời gian dự kiến. Bạn nên gửi ngày bay, giờ đến hoặc giờ đi, số người và mẫu xe quan tâm trước khi chốt kế hoạch. Sân bay là địa điểm có khung giờ rõ ràng, nên việc trao đổi sớm giúp đơn vị cho thuê kiểm tra xe và phương án giao nhận theo lịch. Website nêu hỗ trợ giao nhận tại sân bay theo thông tin giới thiệu, nhưng không hiển thị lịch tự động cho từng chuyến bay.",
        "Đừng chỉ ghi “đón ở sân bay” khi liên hệ. Một tin nhắn có ngày, giờ dự kiến, chiều nhận hoặc trả xe, số điện thoại liên lạc và tên mẫu xe sẽ giúp quá trình xác nhận rõ ràng hơn. Nếu giờ bay thay đổi, nên báo lại càng sớm càng tốt để cùng kiểm tra phương án. Đây là cách làm thực tế cho cả khách về Huế du lịch và khách cần chủ động di chuyển sau khi hạ cánh." ] },
      { heading: "Chọn xe phù hợp sau khi đến Huế", paragraphs: [
        "Khách đi một mình hoặc theo nhóm nhỏ có thể xem xe 4 chỗ và 5 chỗ; khách có gia đình hoặc nhiều hành lý nên xem thêm nhóm xe 7 chỗ. Danh sách xe của TRẠM NHÀ MINT có VinFast và Honda City với thông tin số chỗ, loại nhiên liệu, giá theo ngày. Việc chọn xe trước giúp bạn không mất thời gian tìm hiểu quá nhiều sau khi đến sân bay, đồng thời hỗ trợ việc kiểm tra lịch sớm hơn.",
        "Nếu muốn thuê xe điện sau khi đến sân bay Phú Bài, hãy đọc thêm trang thuê xe điện Huế để biết cách chuẩn bị hành trình. Nếu bạn ưu tiên một mẫu cụ thể, trang thuê xe VinFast Huế sẽ tập hợp các lựa chọn VinFast hiện có. Các chuyên mục này chỉ mô tả dữ liệu xe và cách lựa chọn; tình trạng xe, giá cuối cùng và lịch giao nhận vẫn cần được xác nhận trực tiếp." ] },
      { heading: "Lưu ý cho chuyến thuê theo điểm giao nhận", paragraphs: [
        "Giao nhận tại sân bay cần được thống nhất theo lịch xác nhận, vì thời gian đến thực tế có thể khác kế hoạch ban đầu. Bạn nên giữ liên lạc qua Hotline hoặc Zalo trong ngày nhận xe nếu có thay đổi. Không nên hiểu nội dung trên website là một lời hứa về vị trí đón cố định hay thời gian chờ cụ thể; những chi tiết này phụ thuộc vào lịch xe và trao đổi từng chuyến.",
        "Khi nhận xe, hãy dành thời gian xem lại các thông tin cần thiết và các lưu ý được cung cấp. Website có phần lưu ý thuê xe để khách đọc trước, cũng như phần FAQ để trả lời các câu hỏi thường gặp. Mục tiêu là giúp bạn chuẩn bị tốt hơn trước khi xuất phát, không phải thay thế quy trình xác nhận. Cách giao tiếp rõ ràng từ đầu thường giúp chuyến đi bắt đầu nhẹ nhàng hơn." ] },
      { heading: "Đặt xe từ xa qua Hotline hoặc Zalo", paragraphs: [
        "Khách chưa có mặt ở Huế vẫn có thể gửi yêu cầu thuê xe tại sân bay Phú Bài bằng kênh liên hệ trên website. Hãy nêu lịch dự kiến và yêu cầu giao nhận; đội ngũ sẽ kiểm tra thông tin trước khi phản hồi. Bản đồ Google Maps của TRẠM NHÀ MINT cũng được đặt ở phần Liên hệ để khách có thể tìm vị trí doanh nghiệp khi cần.",
        "Trang sân bay Phú Bài được liên kết tới liên hệ, bảng giá và danh sách xe để khách hoàn tất quá trình tìm hiểu theo thứ tự hợp lý: xác định lịch, chọn loại xe, tham khảo giá rồi xác nhận. Nội dung không đưa ra thông tin chuyến bay, phí phát sinh hay thời gian phục vụ cụ thể vì những chi tiết đó chưa được công bố. Điều này giữ cho trang hữu ích mà vẫn minh bạch." ] },
      ],
    faqs: [
      { question: "Có thể yêu cầu nhận xe tại sân bay Phú Bài không?", answer: "Bạn có thể gửi giờ bay và điểm nhận dự kiến để được kiểm tra. Việc giao nhận được xác nhận theo từng lịch xe." },
      { question: "Tôi nên nhắn gì khi cần thuê xe sân bay Phú Bài?", answer: "Nên có ngày, giờ bay dự kiến, số người, mẫu xe quan tâm và chiều nhận hoặc trả xe để thông tin rõ ràng." },
      { question: "Sau khi đến sân bay nên chọn xe 4 chỗ hay 7 chỗ?", answer: "Hãy chọn dựa trên số người và hành lý. Bạn có thể mở các trang xe 4 chỗ, xe 7 chỗ để xem thêm thông tin trước khi liên hệ." },
      { question: "Giờ bay thay đổi thì sao?", answer: "Bạn nên thông báo lại qua Hotline hoặc Zalo để đơn vị kiểm tra phương án phù hợp với lịch xe." },
    ],
    related: ["lien-he", "thue-xe-dien-hue", "thue-xe-7-cho-hue"],
  },
  {
    slug: "thue-xe-4-cho-hue",
    label: "Thuê xe 4 chỗ Huế",
    title: "Thuê xe 4 chỗ Huế | Xe tự lái gọn gàng theo ngày",
    description: "Tìm hiểu thuê xe 4 chỗ Huế, xem các lựa chọn xe gọn cho nhóm nhỏ và gia đình ít người trong đội xe TRẠM NHÀ MINT.",
    h1: "Thuê xe 4 chỗ Huế cho nhóm nhỏ và lịch trình linh hoạt",
    lead: "Trang chuyên mục giúp khách chọn xe tự lái gọn gàng, xem thông tin số chỗ và chuẩn bị yêu cầu thuê xe tại Huế.",
    image: "https://cdn.motor1.com/images/mgl/qkMJqZ/s1/vinfast-vf-3-at-ces-2024.jpg",
    imageAlt: "VinFast VF 3 minh hoạ cho nhu cầu thuê xe 4 chỗ tại Huế",
    sections: [
      { heading: "Khi nào nên tìm thuê xe 4 chỗ tại Huế", paragraphs: [
        "Thuê xe 4 chỗ Huế thường phù hợp với cặp đôi, nhóm bạn ít người hoặc gia đình nhỏ muốn chủ động lịch trình. Xe gọn giúp việc di chuyển trong những tuyến đường đông người hoặc khi cần dừng đỗ ngắn trở nên dễ tính toán hơn. Tuy nhiên, tên gọi 4 chỗ không nên là tiêu chí duy nhất: khách vẫn cần xem số người, hành lý và các điểm đến dự kiến trong ngày trước khi chọn mẫu xe.",
        "Trong đội xe, VinFast VF 3 được hiển thị là mẫu 4 chỗ. Các mẫu 5 chỗ khác có thể phù hợp nếu bạn muốn thêm không gian. Vì vậy, trang này không khẳng định xe 4 chỗ luôn là lựa chọn tốt nhất; nó giúp bạn hiểu đúng nhóm nhu cầu và chuyển sang trang xe VinFast hoặc danh sách xe khi cần so sánh chi tiết. Lịch xe thực tế được xác nhận qua kênh liên hệ." ] },
      { heading: "Cân nhắc hành lý và số người đi", paragraphs: [
        "Một nhóm bốn người không phải lúc nào cũng có nhu cầu giống nhau. Nếu hành lý gọn và lịch trình chủ yếu đi trong ngày, xe nhỏ có thể đáp ứng phù hợp. Nếu có vali lớn, đồ dùng cho trẻ em hoặc cần chở thêm người trong một số chặng, bạn nên xem thêm xe 5 chỗ hoặc 7 chỗ. Việc nêu rõ số người và hành lý khi nhắn Zalo sẽ giúp đơn vị tư vấn sát nhu cầu hơn.",
        "Khách đi du lịch tự lái thường có lịch linh hoạt, nhưng vẫn nên xác định ngày nhận và ngày trả trước. Giá trên website được hiển thị theo ngày, vì vậy thời gian sử dụng là dữ liệu quan trọng để kiểm tra. Không nên dùng giá của một xe để suy ra giá của xe khác; bảng giá và danh sách xe sẽ nêu từng mức tham khảo riêng theo dữ liệu đang có." ] },
      { heading: "Xe điện 4 chỗ và cách chuẩn bị", paragraphs: [
        "VinFast VF 3 trong danh sách được ghi là xe điện, số tự động và có thông tin khoảng sử dụng hiển thị. Nếu bạn quan tâm mẫu này, hãy đọc trang thuê xe điện Huế để chuẩn bị lộ trình phù hợp. Website không đưa ra lời khuyên về tuyến đường hoặc điểm sạc cụ thể, do đó hãy trao đổi trực tiếp nếu hành trình của bạn có yêu cầu đặc biệt.",
        "Xe điện có thể là lựa chọn phù hợp cho khách muốn trải nghiệm dòng xe VinFast, nhưng quyết định nên dựa trên kế hoạch sử dụng thực tế. Hãy cho biết bạn đi bao nhiêu ngày, chủ yếu trong thành phố hay có nhiều chặng, rồi yêu cầu kiểm tra lịch xe. Cách tiếp cận này đáng tin cậy hơn là đặt theo mô tả chung, đồng thời giúp bạn biết rõ mẫu xe đang có thể phục vụ." ] },
      { heading: "Đặt xe 4 chỗ rõ ràng, không mất thời gian", paragraphs: [
        "Khi đã chọn một mẫu xe 4 chỗ, hãy gửi tên xe, ngày nhận, ngày trả và điểm nhận dự kiến. Bạn có thể gọi 0986 789 715 hoặc nhắn Zalo từ nút CTA trên trang. Nếu cần giao xe tại sân bay Phú Bài, hãy nêu thời gian bay dự kiến để được kiểm tra theo lịch. Mọi xác nhận về xe và giá được thực hiện trực tiếp trước khi đặt.",
        "Trang xe 4 chỗ có liên kết tới xe 7 chỗ, xe điện và bảng giá để khách dễ đổi phương án khi nhu cầu thay đổi. Điều này giúp website có cấu trúc rõ ràng cho người dùng và công cụ tìm kiếm, thay vì lặp lại toàn bộ danh sách xe trong một bài. Nội dung được viết theo nhu cầu nhóm nhỏ tại Huế, trong khi các trang khác đi sâu vào hành trình sân bay hoặc dòng xe VinFast." ] },
      ],
    faqs: [
      { question: "TRẠM NHÀ MINT có xe 4 chỗ nào?", answer: "Danh sách website hiện có VinFast VF 3 ghi nhận 4 chỗ. Bạn nên xem thẻ xe và liên hệ để xác nhận lịch." },
      { question: "Nhóm bốn người có nên chọn xe 4 chỗ không?", answer: "Điều này phụ thuộc hành lý và nhu cầu di chuyển. Nếu cần thêm không gian, bạn nên xem thêm xe 5 chỗ hoặc 7 chỗ." },
      { question: "Xe 4 chỗ trong danh sách là xe điện hay xe xăng?", answer: "VinFast VF 3 được hiển thị là xe điện. Website cũng có các lựa chọn xe xăng ở danh sách chung." },
      { question: "Tôi có thể nhận xe 4 chỗ tại sân bay không?", answer: "Bạn có thể yêu cầu theo giờ dự kiến; thời gian và mẫu xe được kiểm tra trước khi xác nhận." },
    ],
    related: ["thue-xe-dien-hue", "thue-xe-7-cho-hue", "thue-xe-san-bay-phu-bai"],
  },
  {
    slug: "thue-xe-7-cho-hue",
    label: "Thuê xe 7 chỗ Huế",
    title: "Thuê xe 7 chỗ Huế | Lựa chọn tự lái cho nhóm đông người",
    description: "Thuê xe 7 chỗ Huế cho gia đình và nhóm đông người. Xem các lựa chọn nhiều chỗ trong đội xe TRẠM NHÀ MINT và liên hệ xác nhận lịch.",
    h1: "Thuê xe 7 chỗ Huế cho gia đình và nhóm đông người",
    lead: "Tìm hiểu cách chọn xe tự lái nhiều chỗ, chuẩn bị thông tin về số người và hành lý trước khi xác nhận lịch thuê tại Huế.",
    image: "https://cmu-cdn.vinfastauto.us/2023/08/6cdd475e-vinfast-vf9-1536x1024.jpg",
    imageAlt: "VinFast VF 9 minh hoạ cho nhu cầu thuê xe 7 chỗ tại Huế",
    sections: [
      { heading: "Nhu cầu thuê xe nhiều chỗ khi đi cùng gia đình", paragraphs: [
        "Thuê xe 7 chỗ Huế thường được quan tâm khi khách đi cùng gia đình, nhóm bạn đông người hoặc có nhiều hành lý. So với xe nhỏ, số chỗ ngồi là ưu tiên rõ ràng hơn, nhưng vẫn cần xem mẫu xe cụ thể để biết khả năng phù hợp với lịch trình. Trang này giúp bạn bắt đầu từ nhu cầu thực tế: bao nhiêu người, hành lý ra sao, đi trong thành phố hay kết hợp nhiều điểm, nhận xe ở đâu và dùng trong mấy ngày.",
        "Dữ liệu đội xe hiện có VinFast VF 9 ghi nhận 7 chỗ; Limo Green cũng thuộc nhóm xe nhiều chỗ theo danh sách. Những thông tin này có thể thay đổi theo tình trạng xe, do đó hãy coi chúng là lựa chọn để hỏi trước. TRẠM NHÀ MINT sẽ kiểm tra xe còn lịch khi bạn gửi ngày nhận và ngày trả. Trang không mặc định mẫu xe nào có sẵn, cũng không đưa ra sức chứa hành lý không được công bố." ] },
      { heading: "Chọn xe theo số người thay vì chỉ theo tên gọi", paragraphs: [
        "Một xe có bảy chỗ ngồi có thể phù hợp nhóm đông, nhưng sự thoải mái còn phụ thuộc số hành khách, vali và quãng đường. Nếu bạn có đủ bảy người cùng hành lý, hãy nói rõ điều này khi liên hệ để được tư vấn sát hơn. Nếu đi năm hoặc sáu người, xe nhiều chỗ có thể vẫn là phương án phù hợp, nhưng bạn cũng có thể đối chiếu với các mẫu 5 chỗ trong trang xe VinFast.",
        "Không nên đặt xe 7 chỗ chỉ vì thấy giá cao hơn hoặc hình ảnh lớn hơn. Điều quan trọng là nhu cầu sử dụng. Website cung cấp số chỗ, loại nhiên liệu, hộp số và giá tham khảo để giúp bạn lọc ban đầu. Sau đó, trao đổi trực tiếp sẽ làm rõ lịch xe, điểm nhận và thời gian. Cách này bảo đảm nội dung trên web không bị hiểu nhầm thành báo giá hoặc xác nhận tự động." ] },
      { heading: "Xe 7 chỗ điện và lịch trình tại Huế", paragraphs: [
        "VF 9 trong danh sách là xe điện. Khách lựa chọn xe điện cho nhóm đông nên chuẩn bị lộ trình kỹ hơn, đặc biệt khi có nhiều điểm dừng hoặc đi nhiều ngày. Trang thuê xe điện Huế có thông tin nền tảng về cách tiếp cận xe điện tự lái, còn trang này tập trung vào số chỗ và nhu cầu gia đình. Hai trang liên kết với nhau để người dùng xem đúng chủ đề mình cần.",
        "Website nêu các ưu đãi và tính năng theo thông tin giới thiệu, nhưng không thay thế hướng dẫn cụ thể cho từng chuyến. Nếu bạn có lịch di chuyển riêng, hãy gửi qua Zalo khi kiểm tra xe. Đơn vị cho thuê có thể xác nhận phương án phù hợp dựa trên lịch thực tế, trong khi bạn vẫn giữ quyền chủ động lựa chọn mẫu xe sau khi đã hiểu thông tin cơ bản." ] },
      { heading: "Xác nhận thuê xe 7 chỗ tại Huế", paragraphs: [
        "Một yêu cầu rõ ràng nên có ngày nhận, ngày trả, số người đi, hành lý dự kiến và địa điểm nhận xe. Nếu lịch bắt đầu từ sân bay Phú Bài, hãy gửi giờ bay để việc kiểm tra giao nhận sát thực tế hơn. Nếu nhận ở nội thành hoặc ga tàu, bạn cũng nên nêu mốc thời gian. Những chi tiết này giúp quá trình thuê xe gia đình Huế không bị phụ thuộc vào phỏng đoán.",
        "Sau khi được xác nhận, hãy xem lại các thông tin và lưu ý cần thiết trước ngày nhận xe. Trang liên hệ có Hotline, Zalo và bản đồ Google Maps; bảng giá cho phép bạn xem các mức tham khảo. Trang xe 7 chỗ được thiết kế riêng để trả lời ý định tìm kiếm của nhóm đông người, trong khi trang thuê xe tự lái Huế cung cấp bức tranh tổng quan về toàn bộ đội xe." ] },
      ],
    faqs: [
      { question: "Website có xe 7 chỗ nào?", answer: "Danh sách hiện hiển thị VinFast VF 9 với thông tin 7 chỗ. Limo Green cũng là lựa chọn nhiều chỗ theo dữ liệu đội xe." },
      { question: "Đi bảy người có cần báo trước không?", answer: "Có. Hãy cho biết số người và hành lý dự kiến để được kiểm tra mẫu xe, lịch xe và phương án phù hợp." },
      { question: "Xe 7 chỗ có thể nhận tại sân bay Phú Bài không?", answer: "Bạn có thể gửi giờ bay dự kiến. Việc giao nhận được xác nhận theo lịch thực tế." },
      { question: "Giá xe 7 chỗ xem ở đâu?", answer: "Mức giá theo ngày được hiển thị trong danh sách xe và bảng giá; giá cuối cùng được xác nhận khi liên hệ." },
    ],
    related: ["thue-xe-san-bay-phu-bai", "thue-xe-dien-hue", "thue-xe-4-cho-hue"],
  },
  {
    slug: "bang-gia",
    label: "Bảng giá thuê xe",
    title: "Bảng giá thuê xe tự lái Huế | Giá xe theo ngày",
    description: "Xem bảng giá thuê xe tự lái Huế theo ngày của TRẠM NHÀ MINT. Mức giá từng xe là tham khảo và được xác nhận theo lịch thực tế.",
    h1: "Bảng giá thuê xe tự lái Huế theo dữ liệu đội xe",
    lead: "Tìm hiểu cách đọc giá xe theo ngày, so sánh các mẫu đang hiển thị và chuẩn bị thông tin để nhận báo giá xác nhận.",
    image: "/images/tram-nha-minh-fleet.webp",
    imageAlt: "Đội xe TRẠM NHÀ MINT dùng minh hoạ cho bảng giá thuê xe tự lái Huế",
    sections: [
      { heading: "Giá hiển thị trên website có ý nghĩa gì", paragraphs: [
        "Bảng giá thuê xe tự lái Huế được xây dựng từ dữ liệu của từng xe trong danh sách. Mỗi mức giá được hiển thị theo ngày, đi cùng tên xe, số chỗ và thông tin cơ bản để khách dễ so sánh. Đây là giá tham khảo giúp bạn ước lượng phương án trước khi liên hệ, không phải xác nhận tự động cho một ngày cụ thể. Giá cuối cùng cần được kiểm tra cùng lịch nhận, lịch trả và tình trạng xe thực tế.",
        "Việc hiển thị rõ giá theo xe giúp khách không phải dựa vào một mức giá chung cho mọi nhu cầu. VinFast VF 3, các mẫu VinFast 5 chỗ, VF 8, VF 9, Limo Green và Honda City có mức hiển thị khác nhau trong dữ liệu. Khi đọc bảng giá, hãy đối chiếu cùng số người, loại nhiên liệu và lịch sử dụng dự kiến. Một chuyến thuê xe gia đình hay thuê xe ngắn hạn Huế có thể cần mẫu xe khác nhau dù thời gian thuê giống nhau." ] },
      { heading: "So sánh trước khi hỏi báo giá", paragraphs: [
        "Bạn nên chọn trước một mẫu chính và một phương án thay thế. Ví dụ, khách quan tâm xe điện có thể so sánh VF 3 với VF 5; khách đi đông người có thể xem VF 9 và Limo Green; khách muốn xe xăng có thể tham khảo Honda City. Những trang chuyên mục về VinFast, xe điện, 4 chỗ và 7 chỗ sẽ giúp bạn hiểu nhóm xe trước khi quay lại bảng giá.",
        "So sánh hiệu quả không chỉ nằm ở con số. Số chỗ ngồi, hành lý, điểm nhận xe, thời gian sử dụng và sở thích về xe điện hoặc xe xăng đều cần được cân nhắc. Khi thông tin đã rõ, bạn có thể gửi yêu cầu qua Zalo để nhận xác nhận. Đây là cách minh bạch hơn so với việc website tự tạo báo giá nhưng không biết chính xác xe có còn lịch hay không." ] },
      { heading: "Những thông tin cần gửi để xác nhận giá", paragraphs: [
        "Để xác nhận mức giá cho chuyến đi của bạn, hãy gửi ngày nhận xe, ngày trả xe, mẫu xe quan tâm và địa điểm nhận. Nếu muốn thuê xe tại sân bay Phú Bài, thêm giờ bay dự kiến để kiểm tra việc giao nhận theo lịch. Nếu bạn chỉ cần tham khảo, vẫn có thể gửi hai hoặc ba mẫu xe để hỏi phương án. Đơn vị cho thuê sẽ dựa trên dữ liệu xe và lịch hiện có để phản hồi.",
        "Website không công bố chương trình giảm giá, phụ phí hay điều kiện thanh toán ngoài dữ liệu có sẵn, vì vậy trang này không tự thêm các con số đó. Sự thận trọng này giúp khách nhận được thông tin đúng hơn thay vì một lời quảng cáo quá rộng. Khi liên hệ, bạn có thể hỏi chi tiết điều khoản áp dụng cho lịch thuê của mình và đọc phần lưu ý thuê xe trước khi quyết định." ] },
      { heading: "Dùng bảng giá như một công cụ lập kế hoạch", paragraphs: [
        "Một bảng giá tốt giúp khách lập kế hoạch chứ không thay thế cuộc trao đổi. Bạn có thể dùng mức giá theo ngày để so sánh các lựa chọn, sau đó quyết định xe phù hợp với nhóm đi. Các liên kết nội bộ trên trang dẫn tới bài viết theo nhu cầu cụ thể, nhờ đó người đọc không phải lọc toàn bộ đội xe khi chỉ quan tâm xe 4 chỗ hoặc xe 7 chỗ.",
        "Sau khi đã xác định khoảng ngân sách và mẫu xe mong muốn, nút CTA trên trang sẽ đưa bạn tới kênh Zalo hoặc Hotline. TRẠM NHÀ MINT xác nhận lịch trước khi đặt xe. Điều này phù hợp với cách vận hành thực tế của dịch vụ thuê xe theo ngày tại Huế, nơi lịch xe và điểm giao nhận có thể khác nhau theo từng khách." ] },
      ],
    faqs: [
      { question: "Giá trên bảng giá là theo ngày hay theo chuyến?", answer: "Mức giá được hiển thị theo ngày cho từng mẫu xe trong dữ liệu website." },
      { question: "Tại sao cần liên hệ lại khi đã có giá?", answer: "Cần kiểm tra xe còn lịch, ngày nhận trả và thông tin giao nhận để xác nhận đúng cho chuyến thuê của bạn." },
      { question: "Tôi có thể xem giá xe VinFast ở đâu?", answer: "Bạn có thể xem trong danh sách xe, bảng giá và trang thuê xe VinFast Huế." },
      { question: "Bảng giá có áp dụng cho nhận xe ở sân bay không?", answer: "Giá hiển thị là tham khảo theo xe; nhu cầu giao nhận tại sân bay cần được xác nhận theo lịch cụ thể." },
    ],
    related: ["thue-xe-vinfast-hue", "thue-xe-4-cho-hue", "thue-xe-7-cho-hue"],
  },
  {
    slug: "faq",
    label: "Câu hỏi thường gặp",
    title: "FAQ thuê xe tự lái Huế | Giải đáp từ TRẠM NHÀ MINT",
    description: "Câu hỏi thường gặp về thuê xe tự lái Huế: đội xe, giá theo ngày, xe điện, sân bay Phú Bài và cách xác nhận lịch.",
    h1: "Câu hỏi thường gặp khi thuê xe tự lái Huế",
    lead: "Tổng hợp cách chuẩn bị thông tin, chọn xe và xác nhận lịch thuê tại TRẠM NHÀ MINT trước khi bạn liên hệ.",
    image: "/images/gallery/2.jpg",
    imageAlt: "Ảnh xe trong thư viện TRẠM NHÀ MINT cho trang câu hỏi thuê xe tự lái Huế",
    sections: [
      { heading: "Vì sao nên đọc FAQ trước khi liên hệ", paragraphs: [
        "Trang FAQ thuê xe tự lái Huế dành cho khách đang ở giai đoạn tìm hiểu và chưa biết nên bắt đầu từ đâu. Các câu hỏi trên website không thay thế việc xác nhận, nhưng giúp bạn chuẩn bị đúng dữ liệu: ngày nhận, ngày trả, số người, mẫu xe và điểm nhận dự kiến. Khi những thông tin này rõ ràng, quá trình trao đổi qua Hotline hoặc Zalo thường nhanh hơn và bạn cũng dễ so sánh các phương án xe hơn.",
        "Những câu hỏi phổ biến nhất xoay quanh đội xe, giá theo ngày, xe điện, xe 4 chỗ, xe 7 chỗ và giao nhận tại sân bay Phú Bài. Đây là các chủ đề được tách thành những trang riêng để người đọc xem kỹ hơn. Trang FAQ không lặp lại toàn bộ nội dung từng chuyên mục; mục đích là đưa ra định hướng, sau đó dẫn khách tới bài phù hợp với nhu cầu cụ thể." ] },
      { heading: "Cách hiểu đúng tình trạng xe và giá", paragraphs: [
        "Danh sách xe có trạng thái hiển thị và giá tham khảo, nhưng website không phải hệ thống đặt xe theo thời gian thực. Vì vậy, trạng thái trên một trang không nên được hiểu là xe đã được giữ cho lịch của bạn. Để biết chính xác, hãy gửi ngày nhận và ngày trả qua kênh liên hệ. Cách vận hành này tránh việc khách nhìn thấy một mức giá hoặc một mẫu xe rồi hiểu rằng mọi ngày đều áp dụng giống nhau.",
        "Giá theo ngày là thông tin hỗ trợ kế hoạch. Nếu bạn có lịch nhiều ngày, cần giao nhận tại sân bay hoặc đang cân nhắc nhiều mẫu xe, hãy nói rõ để được kiểm tra. Website không công bố các khoản ngoài dữ liệu xe như phí theo tuyến, chương trình ưu đãi hay điều kiện riêng. FAQ vì thế chỉ hướng dẫn khách hỏi đúng, không tự tạo câu trả lời cho những thông tin chưa được xác thực." ] },
      { heading: "Chọn đúng trang theo nhu cầu", paragraphs: [
        "Nếu bạn đã biết muốn thuê VinFast, trang thuê xe VinFast Huế sẽ phù hợp hơn phần FAQ. Nếu ưu tiên xe điện, hãy xem trang xe điện; nếu đi nhóm nhỏ hoặc nhóm đông, hãy dùng các trang xe 4 chỗ và xe 7 chỗ. Khách có giờ bay hoặc muốn nhận xe gần sân bay có thể đọc trang sân bay Phú Bài. Bảng giá là nơi để đối chiếu mức tham khảo sau khi đã xác định nhóm xe.",
        "Cấu trúc các trang được xây dựng để hỗ trợ người tìm kiếm theo từng ý định, đồng thời giúp công cụ tìm kiếm hiểu các dịch vụ liên quan ở Huế. Nội dung không cố gắng nhồi mọi cụm từ vào một bài. Thay vào đó, mỗi trang trả lời một nhóm câu hỏi khác nhau, còn trang FAQ đóng vai trò điểm bắt đầu cho người chưa xác định rõ nhu cầu." ] },
      { heading: "Khi nào cần liên hệ trực tiếp", paragraphs: [
        "Bạn nên liên hệ trực tiếp khi cần biết xe còn lịch, muốn chốt giá cho ngày cụ thể, cần giao nhận theo thời gian riêng hoặc chưa chắc mẫu xe có phù hợp hành lý. Đây là những thông tin phụ thuộc từng chuyến thuê nên không thể trả lời cố định trên website. Hotline 0986 789 715 và Zalo là hai kênh để bạn gửi yêu cầu.",
        "Trước khi liên hệ, hãy chuẩn bị lịch dự kiến và đọc phần lưu ý thuê xe. Sau khi nhận được phản hồi, bạn có thể quyết định dựa trên thông tin đã xác nhận thay vì chỉ dựa vào FAQ. Trang Liên hệ có bản đồ Google Maps của TRẠM NHÀ MINT và các nút liên lạc, giúp khách chủ động tìm đường hoặc kết nối nhanh khi cần." ] },
      ],
    faqs: [
      { question: "Website có đặt xe trực tuyến ngay được không?", answer: "Website hỗ trợ xem xe và gửi yêu cầu. Tình trạng xe và lịch thuê được xác nhận qua Hotline hoặc Zalo." },
      { question: "Nên xem trang nào nếu cần xe điện?", answer: "Bạn nên xem trang Thuê xe điện Huế, sau đó đối chiếu mẫu xe tại Danh sách xe và Bảng giá." },
      { question: "Nên chuẩn bị gì trước khi hỏi thuê xe?", answer: "Ngày nhận, ngày trả, số người, hành lý, mẫu xe quan tâm và điểm nhận xe dự kiến là các thông tin hữu ích nhất." },
      { question: "FAQ có thay thế điều khoản thuê xe không?", answer: "Không. FAQ chỉ giúp bạn tìm hiểu trước; thông tin và điều khoản cho chuyến thuê được xác nhận khi liên hệ." },
    ],
    related: ["thue-xe-tu-lai-hue", "bang-gia", "lien-he"],
  },
  {
    slug: "lien-he",
    label: "Liên hệ thuê xe",
    title: "Liên hệ thuê xe tự lái Huế | Hotline và Zalo TRẠM NHÀ MINT",
    description: "Liên hệ TRẠM NHÀ MINT để xác nhận thuê xe tự lái Huế: Hotline 0986 789 715, Zalo, Facebook và bản đồ Google Maps.",
    h1: "Liên hệ TRẠM NHÀ MINT để xác nhận thuê xe tại Huế",
    lead: "Gửi lịch thuê dự kiến qua Hotline hoặc Zalo để kiểm tra xe, giá theo ngày và khả năng giao nhận theo lịch của bạn.",
    image: "/images/gallery/3.jpg",
    imageAlt: "Xe VinFast trong thư viện ảnh TRẠM NHÀ MINT tại Huế",
    sections: [
      { heading: "Kênh liên hệ dành cho khách thuê xe", paragraphs: [
        "TRẠM NHÀ MINT tiếp nhận yêu cầu thuê xe qua Hotline 0986 789 715 và Zalo. Hai kênh này phù hợp để xác nhận tình trạng xe, ngày nhận, ngày trả và yêu cầu giao nhận. Website cung cấp thông tin đội xe và giá tham khảo trước để khách có thể chủ động tìm hiểu, nhưng cuộc trao đổi trực tiếp là bước cần thiết trước khi chốt lịch. Bạn cũng có thể truy cập Facebook của đơn vị từ phần đầu trang hoặc chân trang.",
        "Một yêu cầu càng rõ, việc phản hồi càng hiệu quả. Khi nhắn tin, hãy cho biết bạn cần xe vào ngày nào, dùng bao lâu, đi bao nhiêu người và đang quan tâm mẫu xe nào. Nếu bạn chưa chọn được xe, hãy mô tả nhu cầu như xe điện, xe 4 chỗ, xe 7 chỗ hoặc xe xăng. Đơn vị có thể dựa vào danh sách hiện có để kiểm tra thay vì phải hỏi lại nhiều lần." ] },
      { heading: "Thông tin nên gửi khi hỏi lịch xe", paragraphs: [
        "Ngày nhận và ngày trả là hai dữ liệu quan trọng nhất vì giá được hiển thị theo ngày và xe cần được kiểm tra theo lịch. Điểm nhận cũng hữu ích, đặc biệt khi bạn muốn giao nhận tại nhà, sân bay Phú Bài, ga tàu hoặc bến xe. Nếu có giờ bay hoặc giờ tàu, hãy gửi thời gian dự kiến để phương án giao nhận được xem xét đúng bối cảnh.",
        "Khách không cần gửi thông tin nhạy cảm trên website. Chỉ cần lịch dự kiến và nhu cầu xe là đủ để bắt đầu tư vấn. Các nội dung khác sẽ được trao đổi trực tiếp khi phù hợp. Cách tiếp nhận này giúp trang Liên hệ vừa gọn gàng, vừa tôn trọng thông tin cá nhân của khách, đồng thời không tạo biểu mẫu lưu dữ liệu khi chưa cần thiết." ] },
      { heading: "Tìm vị trí trên Google Maps", paragraphs: [
        "Phần Liên hệ của trang chủ có bản đồ Google Maps của Trạm Nhà Mint và nút mở chỉ đường. Bản đồ giúp khách dễ tìm vị trí doanh nghiệp khi cần, nhưng không thay thế xác nhận về điểm giao nhận của chuyến thuê. Bạn có thể mở bản đồ để xem hướng đi rồi tiếp tục liên hệ qua Zalo hoặc Hotline cho nhu cầu cụ thể.",
        "Việc đặt bản đồ trên website cũng hỗ trợ Local SEO Huế vì người dùng và Google đều thấy mối liên hệ giữa doanh nghiệp với khu vực phục vụ. Thông tin trên bản đồ do Google Maps hiển thị; nếu có nội dung nào cần cập nhật về doanh nghiệp, bạn nên quản lý trên Google Business Profile. Website chỉ liên kết và nhúng bản đồ để khách thuận tiện truy cập." ] },
      { heading: "Chọn trang phù hợp trước khi gọi", paragraphs: [
        "Nếu bạn đã biết nhu cầu, các trang chuyên mục sẽ giúp cuộc liên hệ nhanh hơn. Trang thuê xe VinFast Huế phù hợp khi bạn muốn xe VinFast; trang xe điện dành cho nhu cầu xe điện tự lái; trang xe 4 chỗ và xe 7 chỗ hỗ trợ chọn theo số người. Nếu ưu tiên giá, hãy xem Bảng giá trước khi liên hệ. Mỗi trang đều có CTA dẫn lại tới Hotline và Zalo.",
        "TRẠM NHÀ MINT chỉ xác nhận xe sau khi kiểm tra lịch thực tế. Vì vậy, thông tin rõ ràng từ khách là phần quan trọng của quy trình. Trang liên hệ này không hứa hẹn phản hồi trong một thời gian cố định, không tự tạo báo giá và không xác định địa điểm giao nhận tự động. Mục tiêu là kết nối bạn với kênh phù hợp để có câu trả lời đúng cho chuyến đi tại Huế." ] },
      ],
    faqs: [
      { question: "Hotline thuê xe tự lái Huế là số nào?", answer: "Bạn có thể gọi 0986 789 715 để gửi lịch thuê dự kiến và kiểm tra thông tin." },
      { question: "Có thể nhắn Zalo để hỏi xe không?", answer: "Có. Nút Zalo trên website dẫn đến kênh liên hệ của TRẠM NHÀ MINT." },
      { question: "Cần gửi thông tin gì khi liên hệ?", answer: "Ngày nhận, ngày trả, số người, mẫu xe quan tâm và điểm nhận dự kiến sẽ giúp việc kiểm tra nhanh hơn." },
      { question: "Trang liên hệ có bản đồ không?", answer: "Có. Website có bản đồ Google Maps và nút mở chỉ đường tới Trạm Nhà Mint." },
    ],
    related: ["thue-xe-san-bay-phu-bai", "bang-gia", "faq"],
  },
];

export const seoPageBySlug = Object.fromEntries(seoPages.map((page) => [page.slug, page])) as Record<string, SeoPage>;
