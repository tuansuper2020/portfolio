import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";

export type Article = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  lede: string;
  body: ReactNode;
};

const en: Record<string, Article> = {
  "first-quarter-as-product-owner": {
    slug: "first-quarter-as-product-owner",
    title: "What I learned in my first quarter as a Product Owner",
    date: "April 2026",
    readingTime: "6 min read",
    lede: "Three months, two Shopify apps, one honest retro.",
    body: (
      <>
        <p>
          I took over two Shopify apps at Avada in the middle of last year. By
          the end of Q1 2026 I had written 36 Product Requirements Documents
          for the Checkout Upsell app, another 28 for the Post Purchase Upsell
          app, and supported around 869 engineering commits across both. One
          of the apps climbed to #2 on its App Store category. This is what
          actually went into those numbers — good and bad.
        </p>

        <h2>What worked: build a pipeline, not a pile of tasks</h2>
        <p>
          Early in the quarter I kept getting stuck on the same bottleneck —
          new features would pile up faster than I could spec them. The fix
          wasn&apos;t working harder; it was turning the whole flow into a
          pipeline:
        </p>
        <p>
          <em>Research → UX spec → PRD → HTML mockups → PNG → Notion → dev
          tasks.</em>
        </p>
        <p>
          Every step has its own rule and its own script. Research has six
          required phases before I&apos;m allowed to start writing. Mockups use
          Shopify&apos;s Polaris web components for admin pages and checkout
          design tokens for buyer-facing pages — never the two mixed. PNGs
          come out of a batch Playwright script that measures each HTML body
          so nothing gets cropped. Notion pages are created by a script that
          copies properties (assignee, sprint, status) so they never drift.
        </p>
        <p>
          The outcome was boring in the best way. Once the pipeline was in
          place, shipping a feature stopped feeling like a heroic effort and
          started feeling like turning a crank.
        </p>

        <h2>What worked: one shared knowledge base</h2>
        <p>
          I keep an Obsidian vault with 35+ notes per project. Not meeting
          notes — reusable ones: a page on the Checkout page anatomy, a page
          on Shopify discount combinations, a page on Polaris Web Components
          (with a verified list of which components actually support which
          props — a surprising number of the docs are wrong). The rule is
          simple: if a question comes up twice, it becomes a page. If it comes
          up a third time, it becomes a checklist.
        </p>

        <h2>What I&apos;d change next quarter</h2>
        <p>
          <strong>Standardize earlier.</strong> The Polaris-CDN-for-mockups
          approach only clicked mid-quarter. Before that I was rebuilding
          native HTML every time and getting subtle visual drift. One week of
          setting up the template would have saved a month of cleanup.
        </p>
        <p>
          <strong>Write the rules as you discover them.</strong> The
          admin-vs-checkout design system rule — that you must use different
          fonts, colors, and spacing tokens depending on which surface the UI
          runs on — I learned through errors. Future me shouldn&apos;t need to
          re-learn that; it&apos;s a permanent page now.
        </p>
        <p>
          <strong>Enforce PRD-to-mockup sync.</strong> Several mockups drifted
          from their PRD text when I updated one and not the other. Next
          quarter I want a single source of truth per feature — so touching
          one place propagates to the others automatically.
        </p>

        <h2>The honest challenge</h2>
        <p>
          Every feature update touches four or five places: the PRD, the
          mockup images, the dev task, the user guide, the app listing. No
          system owns all of them. The work of being a PO, right now, is
          making sure those five places agree. That&apos;s the real job — and
          it&apos;s the part I&apos;m trying hardest to automate away this
          quarter.
        </p>
      </>
    ),
  },

  "prds-that-dont-confuse-engineers": {
    slug: "prds-that-dont-confuse-engineers",
    title: "How I write PRDs that don't confuse engineers",
    date: "April 2026",
    readingTime: "5 min read",
    lede: "Six research phases, one content rule, and a section structure that fits on two pages.",
    body: (
      <>
        <p>
          A PRD — Product Requirements Document — is the piece of paper an
          engineer reads before they write code. If it&apos;s too vague,
          they&apos;ll guess and ship the wrong thing. If it&apos;s too long,
          they&apos;ll skim and miss the part that mattered. I&apos;ve written
          64 of them in the last quarter. Here&apos;s the shape that holds up.
        </p>

        <h2>Start with research, not writing</h2>
        <p>
          I have a rule: I&apos;m not allowed to write a PRD until I&apos;ve
          finished six research passes.
        </p>
        <ol>
          <li><strong>Feature context.</strong> What problem does this solve? Who feels it?</li>
          <li><strong>Similar PRDs.</strong> What patterns have we already set? Match them unless there&apos;s a reason not to.</li>
          <li><strong>Codebase.</strong> What already exists? I&apos;d rather extend than add.</li>
          <li><strong>Platform.</strong> What does Shopify let us do, and what does it forbid?</li>
          <li><strong>Competitors.</strong> How do Aftersell, Zipify, and ReConvert solve the same problem?</li>
          <li><strong>Design direction.</strong> Which Polaris patterns are relevant? Where are the UI precedents?</li>
        </ol>
        <p>
          This sounds heavy. It isn&apos;t. Most features hit four or five of
          these phases in under an hour — the value is that the PRD starts
          from context, not from my first guess.
        </p>

        <h2>One content rule that saves hours</h2>
        <p>
          <strong>No tech details in the PRD.</strong> No database schemas,
          no component prop lists, no file paths, no &ldquo;Acceptance
          Criteria&rdquo; section that duplicates the user flow. The PRD
          describes <em>what the merchant experiences</em>. The engineer
          decides how to build it.
        </p>
        <p>
          This one rule is the difference between a PRD that feels like a
          spec and a PRD that feels like a story. Stories get read. Specs get
          skimmed.
        </p>

        <h2>The section structure</h2>
        <p>Every PRD in my workflow has exactly four sections, in order:</p>
        <ol>
          <li><strong>Merchant experience — entry point.</strong> What does the merchant see first? One screen, one purpose.</li>
          <li><strong>List page.</strong> How do they manage multiples of this thing?</li>
          <li><strong>Create / edit.</strong> The 2:1 two-column layout: settings on the left, summary on the right.</li>
          <li><strong>Buyer checkout display.</strong> Every variant gets its own section. Not one mockup with &ldquo;this can also look like that.&rdquo;</li>
        </ol>

        <h2>Length as a forcing function</h2>
        <p>
          A medium feature gets 250 to 350 lines. If I&apos;m going over, the
          feature is either too big or the PRD has crept into tech territory.
          Either way, it&apos;s a signal to cut.
        </p>

        <h2>Settings belong in tables</h2>
        <p>
          Every configurable setting is a row: name, options, default. Not a
          paragraph. A table forces clarity — it&apos;s very hard to hide a
          missing default in a row.
        </p>

        <p>
          None of this is clever. All of it is repeated across 64 documents
          without meaningful exceptions. Consistency is the boring part that
          makes engineers trust the paper.
        </p>
      </>
    ),
  },

  "shipping-on-shopify": {
    slug: "shipping-on-shopify",
    title: "Shipping on Shopify: the non-obvious things",
    date: "April 2026",
    readingTime: "7 min read",
    lede: "Ten bug patterns we keep seeing across checkout and post-purchase — and the checklist we now run before every launch.",
    body: (
      <>
        <p>
          Across 24 QA cycles in the last four months, the same 10 kinds of
          bugs kept coming back. Different features, same shapes. Once you
          see the pattern, you can check for it up front instead of
          rediscovering it at launch.
        </p>

        <h2>1. The empty-field trap</h2>
        <p>A merchant hits save with a required field empty. Nothing stops them. The feature ships broken. The fix is simple but easy to skip: every field that affects a business rule needs a required check, a min/max, and a whitespace trim. The first thing QA should try is &ldquo;save with everything empty.&rdquo;</p>

        <h2>2. Clearing input crashes the page</h2>
        <p>Numeric inputs are the usual suspect. A merchant selects all and deletes — the value becomes undefined — the component crashes. Always fall back to a default (0 or the minimum) rather than passing undefined downstream.</p>

        <h2>3. Status doesn&apos;t sync both ways</h2>
        <p>Disable an offer in our app, and Shopify still shows it live. Disable it in Shopify, and our app still says active. Bidirectional sync isn&apos;t a nice-to-have — it&apos;s the whole contract. Every save has to preserve every field, read back after writing, and re-check at render time.</p>

        <h2>4. The offer shows up when it shouldn&apos;t</h2>
        <p>Trigger conditions fire too eagerly. Usually the culprit is checking only product ID, not variant ID — so a specific size of a specific shirt slips through. Re-evaluate on every cart change, not just the first load. And always test the include case <em>and</em> the exclude case independently.</p>

        <h2>5. Discount combinations are landmines</h2>
        <p>Fourteen of our bugs in Q1 were in discount logic alone. Shopify&apos;s <code>combinesWith</code> flags, Buy-X-Get-Y rules, and usage limits interact in ways that aren&apos;t obvious from reading the docs. Treat every discount feature as &ldquo;read the combination rules again&rdquo; work.</p>

        <h2>6. The save bar that doesn&apos;t appear</h2>
        <p>A merchant changes a setting, nothing looks different, they navigate away and lose the change. Every <code>onChange</code> has to trigger the dirty state — including nested fields, dynamic fields, and array items. Discard has to deep-clone the original data, not reference it.</p>

        <h2>7. Page 2 shows yesterday&apos;s data</h2>
        <p>Filter or sort on page 2 — the URL keeps the page number, but the filter reshuffled the set. Result: wrong page. Rule: any filter or sort change resets pagination to page 1. Any time data count changes, re-evaluate whether pagination is even needed.</p>

        <h2>8. Little UI things</h2>
        <p>Missing placeholders. Wrong badges. Banners that should appear and don&apos;t. Inconsistent status names across pages (&ldquo;Active&rdquo; in one place, &ldquo;Live&rdquo; in another). None of these crash anything. All of them erode trust.</p>

        <h2>9. The cart updates but the offer doesn&apos;t</h2>
        <p>Buyer adds an item, the upsell should now qualify — it doesn&apos;t re-check. Storefront extensions need to subscribe to cart-change events and re-evaluate <em>all</em> their conditions. Remove one item, the other conditions can&apos;t silently break.</p>

        <h2>10. Revenue counts only the first line item</h2>
        <p>The nastiest kind of bug — the numbers look right, but they&apos;re wrong. Iterate through every line item. Use the saved discount value, not the default. Increment counters server-side only. One offer, one discount function — never share.</p>

        <h2>The checklist</h2>
        <p>These ten patterns became 20+ items on a pre-launch checklist. Not a &ldquo;nice to have&rdquo; — a hard gate. A feature can&apos;t move to release until every relevant item has a pass. It&apos;s saved us more than once.</p>
      </>
    ),
  },

  "po-automation-playbook": {
    slug: "po-automation-playbook",
    title: "Turning repetitive PO work into a pipeline",
    date: "April 2026",
    readingTime: "5 min read",
    lede: "From research to Notion in one flow — how to automate the boring parts of being a Product Owner so you can think about the work, not chase it.",
    body: (
      <>
        <p>The product owner job is half judgment calls and half paperwork. The judgment is the interesting part. The paperwork is what burns weekends. Here&apos;s what I automated in Q1 2026 to give that time back.</p>

        <h2>Mockups that make themselves</h2>
        <p>Every PRD needs pictures. I used to make those pictures by opening Figma, dragging components, and exporting PNGs one at a time. By the time I was on my fortieth feature it had swallowed an entire day per spec.</p>
        <p>The replacement: write the mockup as HTML, render it with Shopify&apos;s Polaris Web Components via CDN, and let a Playwright script screenshot it at the exact dimensions. One script input, six PNGs out. The edit loop is minutes, not hours.</p>
        <p>One gotcha I paid for: the screenshot dimensions have to match the HTML body dimensions exactly. I lost 38 images to a fixed-height batch script before I wrote a tiny function that reads each HTML&apos;s actual body height and passes it through. That fix — maybe 15 lines of code — is worth the whole pipeline.</p>

        <h2>Notion that keeps itself in sync</h2>
        <p>Every PRD becomes a Notion page with properties: who&apos;s assigned, who&apos;s following, which sprint, which status, what tag. Doing that by hand is how PRDs end up orphaned — no sprint, no assignee, invisible to the team.</p>
        <p>Four scripts now do that work: one pushes the PRD, one creates linked dev tasks, one assigns sprints, one keeps FAQ pages in sync with the current user guide. Every property has a default. Nothing gets created without a sprint.</p>

        <h2>Screenshot and annotation without the Chrome dance</h2>
        <p>Feature screenshots for docs used to mean: open the demo store, find the right state, screenshot, drag into an editor, draw arrows, export, upload. Now: Playwright captures a specific URL in a specific state, a script draws the annotations from a JSON config, and the composite gets uploaded to our CDN automatically. Same feature ships with the same screenshots every time.</p>

        <h2>A user guide that updates on a push</h2>
        <p>The user guide lives as markdown in GitHub. When I push, GitBook picks it up. No copy-paste between systems, no stale versions, no &ldquo;which is the latest.&rdquo;</p>

        <h2>What stays manual</h2>
        <p>Everything that requires judgment. Scoping. Prioritization. The call about which feature ships first and why. The conversation with engineering about what&apos;s really hard and what just looks hard. A PO who automates those parts has automated themselves out of the job.</p>

        <h2>The rule</h2>
        <p>If I do something three times, it becomes a script. If I make the same mistake twice, it becomes a check in the script. The first instance is a task. The second is a warning. The third is a commitment.</p>
      </>
    ),
  },
};

const vi: Record<string, Article> = {
  "first-quarter-as-product-owner": {
    slug: "first-quarter-as-product-owner",
    title: "Những gì tôi học được trong quý đầu làm Product Owner",
    date: "Tháng 4/2026",
    readingTime: "6 phút đọc",
    lede: "Ba tháng, hai ứng dụng Shopify, một retro thành thật.",
    body: (
      <>
        <p>
          Tôi tiếp quản hai ứng dụng Shopify ở Avada giữa năm ngoái. Đến
          cuối Q1 2026 tôi đã viết 36 PRD cho Checkout Upsell, 28 PRD cho
          Post Purchase Upsell, và hỗ trợ khoảng 869 commit engineering
          trên cả hai. Một trong hai app leo lên #2 trong category của nó
          trên App Store. Đây là những gì thực sự đi vào những con số đó
          — cả tốt lẫn chưa tốt.
        </p>

        <h2>Cái đã hiệu quả: xây pipeline, không phải chồng task</h2>
        <p>
          Đầu quý tôi cứ mắc vào cùng một nút thắt — feature mới chồng
          lên nhanh hơn tôi spec kịp. Cách sửa không phải làm chăm hơn;
          mà là biến cả flow thành pipeline:
        </p>
        <p>
          <em>Research → UX spec → PRD → HTML mockup → PNG → Notion → dev
          task.</em>
        </p>
        <p>
          Mỗi bước có rule riêng và script riêng. Research phải xong sáu
          pha mới được bắt đầu viết. Mockup dùng Polaris web components
          của Shopify cho trang admin và design token checkout cho trang
          hướng buyer — không bao giờ trộn. PNG ra từ script Playwright
          batch tự đo body mỗi HTML để không bị crop. Notion page được
          script tạo với property (assignee, sprint, status) đã pre-fill
          — không bao giờ lệch.
        </p>
        <p>
          Kết quả là nhàm chán theo nghĩa tốt nhất. Khi pipeline đã xong,
          ship một feature không còn cảm giác như nỗ lực anh hùng mà như
          quay tay.
        </p>

        <h2>Cái đã hiệu quả: một knowledge base chung</h2>
        <p>
          Tôi giữ một Obsidian vault với 35+ note mỗi dự án. Không phải
          meeting note — mà note tái sử dụng: trang về anatomy Checkout,
          trang về discount combination của Shopify, trang về Polaris Web
          Components (có list đã verify xem component nào thực sự hỗ trợ
          prop nào — nhiều hơn bạn nghĩ là doc sai). Rule đơn giản: nếu
          một câu hỏi xuất hiện hai lần, nó thành một trang. Nếu nó xuất
          hiện lần thứ ba, nó thành một checklist.
        </p>

        <h2>Điều tôi sẽ thay đổi ở quý sau</h2>
        <p>
          <strong>Chuẩn hoá sớm hơn.</strong> Cách dùng Polaris CDN cho
          mockup chỉ bật ra giữa quý. Trước đó tôi cứ dựng lại HTML
          native mỗi lần và bị drift visual tinh tế. Một tuần setup
          template lẽ ra đã tiết kiệm một tháng dọn dẹp.
        </p>
        <p>
          <strong>Viết rule ngay khi phát hiện.</strong> Rule design
          system admin-vs-checkout — phải dùng font, màu, spacing token
          khác nhau tuỳ bề mặt UI chạy — tôi học qua lỗi. Future me không
          cần học lại; giờ nó là một trang vĩnh viễn.
        </p>
        <p>
          <strong>Ép PRD sync với mockup.</strong> Vài mockup drift khỏi
          text PRD khi tôi update cái này mà không update cái kia. Quý
          sau tôi muốn một nguồn sự thật duy nhất cho mỗi feature — chạm
          một nơi, mọi nơi khác tự cập nhật.
        </p>

        <h2>Thách thức thành thật</h2>
        <p>
          Mỗi lần update feature chạm bốn đến năm nơi: PRD, ảnh mockup,
          dev task, user guide, app listing. Không hệ thống nào sở hữu
          tất cả. Việc làm PO, ngay lúc này, là đảm bảo năm nơi đó đồng
          thuận. Đó là công việc thật — và là phần tôi cố gắng tự động
          hoá đi nhiều nhất trong quý này.
        </p>
      </>
    ),
  },

  "prds-that-dont-confuse-engineers": {
    slug: "prds-that-dont-confuse-engineers",
    title: "Cách tôi viết PRD không làm engineer bối rối",
    date: "Tháng 4/2026",
    readingTime: "5 phút đọc",
    lede: "Sáu pha research, một quy tắc về nội dung, và cấu trúc section gọn đủ để đọc hết trong hai trang.",
    body: (
      <>
        <p>
          PRD — Product Requirements Document — là tờ giấy engineer đọc
          trước khi viết code. Nếu mơ hồ, họ sẽ đoán và ship sai thứ. Nếu
          quá dài, họ sẽ lướt và bỏ lỡ phần quan trọng. Tôi đã viết 64
          cái trong quý vừa rồi. Đây là khuôn đứng vững.
        </p>

        <h2>Bắt đầu bằng research, không phải viết</h2>
        <p>
          Tôi có một rule: không được viết PRD cho đến khi xong sáu pha
          research.
        </p>
        <ol>
          <li><strong>Feature context.</strong> Giải quyết vấn đề gì? Ai cảm thấy nó?</li>
          <li><strong>PRD tương tự.</strong> Pattern nào đã thiết lập? Bắt theo trừ khi có lý do không.</li>
          <li><strong>Codebase.</strong> Đã có gì? Tôi thà mở rộng còn hơn thêm mới.</li>
          <li><strong>Platform.</strong> Shopify cho phép gì và cấm gì?</li>
          <li><strong>Đối thủ.</strong> Aftersell, Zipify, ReConvert giải quyết cùng vấn đề ra sao?</li>
          <li><strong>Định hướng design.</strong> Pattern Polaris nào liên quan? Tiền lệ UI ở đâu?</li>
        </ol>
        <p>
          Nghe nặng. Thực ra không. Phần lớn feature hit được bốn hoặc
          năm pha trong dưới một giờ — giá trị là PRD bắt đầu từ context,
          không phải từ đoán mò đầu tiên của tôi.
        </p>

        <h2>Một quy tắc tiết kiệm hàng giờ</h2>
        <p>
          <strong>Không tech detail trong PRD.</strong> Không DB schema,
          không list prop component, không file path, không section
          &ldquo;Acceptance Criteria&rdquo; lặp lại user flow. PRD mô tả{" "}
          <em>merchant trải nghiệm gì</em>. Engineer quyết cách build.
        </p>
        <p>
          Rule này là ranh giới giữa một PRD như spec và một PRD như một
          câu chuyện. Câu chuyện được đọc. Spec bị lướt.
        </p>

        <h2>Cấu trúc section</h2>
        <p>Mỗi PRD trong workflow của tôi có đúng bốn section, theo thứ tự:</p>
        <ol>
          <li><strong>Merchant experience — entry point.</strong> Merchant thấy gì đầu tiên? Một màn hình, một mục đích.</li>
          <li><strong>List page.</strong> Họ quản lý nhiều item kiểu này thế nào?</li>
          <li><strong>Create / edit.</strong> Layout 2:1 hai cột: settings trái, summary phải.</li>
          <li><strong>Hiển thị checkout với buyer.</strong> Mỗi variant một section riêng. Không có chuyện một mockup kèm &ldquo;còn có thể trông như thế này.&rdquo;</li>
        </ol>

        <h2>Độ dài làm hàng rào ép</h2>
        <p>
          Feature vừa vừa = 250 đến 350 dòng. Nếu vượt, hoặc feature quá
          lớn, hoặc PRD đang lấn vào lãnh địa tech. Dù gì cũng là tín
          hiệu phải cắt.
        </p>

        <h2>Settings thuộc về bảng</h2>
        <p>
          Mọi setting có thể cấu hình là một dòng: tên, options, default.
          Không phải đoạn văn. Bảng ép sự rõ ràng — rất khó giấu một
          default thiếu trong một dòng.
        </p>

        <p>
          Không có gì khôn ngoan ở đây. Tất cả được lặp lại qua 64 tài
          liệu mà không có ngoại lệ đáng kể. Nhất quán là phần nhàm chán
          khiến engineer tin tờ giấy.
        </p>
      </>
    ),
  },

  "shipping-on-shopify": {
    slug: "shipping-on-shopify",
    title: "Ship trên Shopify: những thứ không-hiển-nhiên",
    date: "Tháng 4/2026",
    readingTime: "7 phút đọc",
    lede: "Mười pattern bug lặp lại ở checkout và post-purchase — cùng checklist chúng tôi chạy trước mỗi lần launch.",
    body: (
      <>
        <p>
          Qua 24 chu kỳ QA trong bốn tháng vừa rồi, cùng 10 loại bug cứ
          quay lại. Khác feature, cùng hình dạng. Khi thấy pattern, bạn
          có thể check từ đầu thay vì phát hiện lại lúc launch.
        </p>

        <h2>1. Bẫy field trống</h2>
        <p>Merchant bấm save với field bắt buộc trống. Không gì chặn họ. Feature ship hỏng. Fix đơn giản nhưng dễ bỏ qua: mọi field ảnh hưởng business rule cần required check, min/max, và trim whitespace. Thứ đầu tiên QA phải thử: &ldquo;save với mọi thứ trống.&rdquo;</p>

        <h2>2. Xoá input làm crash trang</h2>
        <p>Numeric input là thủ phạm thường gặp. Merchant chọn tất cả và xoá — value thành undefined — component crash. Luôn fallback về default (0 hoặc min) thay vì đẩy undefined xuống dưới.</p>

        <h2>3. Status không sync hai chiều</h2>
        <p>Disable offer trong app của chúng tôi, Shopify vẫn show live. Disable trong Shopify, app vẫn báo active. Sync hai chiều không phải nice-to-have — đó là toàn bộ hợp đồng. Mỗi save phải preserve mọi field, read back sau khi ghi, và re-check lúc render.</p>

        <h2>4. Offer hiện lên khi không nên</h2>
        <p>Trigger condition fire quá hăng. Thủ phạm thường là chỉ check product ID, không check variant ID — nên một size cụ thể của một áo cụ thể lọt qua. Re-evaluate trên mọi cart change, không chỉ lần load đầu. Và luôn test case include <em>và</em> exclude độc lập.</p>

        <h2>5. Discount combination là bom mìn</h2>
        <p>Mười bốn bug trong Q1 nằm riêng ở logic discount. Flag <code>combinesWith</code> của Shopify, rule Buy-X-Get-Y, và usage limit tương tác theo cách không rõ ràng qua doc. Coi mỗi feature discount là công việc &ldquo;đọc lại rule combination.&rdquo;</p>

        <h2>6. Save bar không xuất hiện</h2>
        <p>Merchant đổi một setting, không có gì trông khác, họ navigate đi và mất thay đổi. Mọi <code>onChange</code> phải trigger dirty state — bao gồm nested field, dynamic field, array item. Discard phải deep-clone data gốc, không reference.</p>

        <h2>7. Trang 2 hiện dữ liệu cũ</h2>
        <p>Filter hoặc sort ở trang 2 — URL giữ số trang, nhưng filter đã tráo set lại. Kết quả: sai trang. Rule: mọi thay đổi filter hoặc sort reset pagination về trang 1. Mọi khi data count thay đổi, re-evaluate xem có cần pagination không.</p>

        <h2>8. Những thứ UI nhỏ</h2>
        <p>Thiếu placeholder. Badge sai. Banner đáng ra xuất hiện lại không. Status name không nhất quán giữa trang (&ldquo;Active&rdquo; ở nơi này, &ldquo;Live&rdquo; ở nơi khác). Không cái nào làm crash gì cả. Tất cả đều bào mòn trust.</p>

        <h2>9. Cart update mà offer không</h2>
        <p>Buyer thêm một item, upsell đáng ra đủ điều kiện — nó không re-check. Extension storefront cần subscribe event cart-change và re-evaluate <em>mọi</em> condition. Xoá một item, condition khác không được phép im lặng vỡ.</p>

        <h2>10. Revenue chỉ đếm line item đầu</h2>
        <p>Loại bug tệ nhất — số trông đúng, nhưng sai. Iterate qua mọi line item. Dùng discount value đã save, không phải default. Increment counter server-side thôi. Một offer, một discount function — không bao giờ share.</p>

        <h2>Checklist</h2>
        <p>Mười pattern này đã thành 20+ item trong checklist trước khi launch. Không phải &ldquo;nice to have&rdquo; — một cổng cứng. Một feature không thể sang release cho đến khi mọi item liên quan pass. Nó đã cứu chúng tôi nhiều lần.</p>
      </>
    ),
  },

  "po-automation-playbook": {
    slug: "po-automation-playbook",
    title: "Biến công việc PO lặp lại thành pipeline",
    date: "Tháng 4/2026",
    readingTime: "5 phút đọc",
    lede: "Từ research đến Notion trong một flow — tự động hoá phần buồn tẻ của công việc PO để đầu óc nghĩ về công việc, không phải chạy theo nó.",
    body: (
      <>
        <p>Công việc product owner nửa là judgment call, nửa là giấy tờ. Judgment là phần hay. Giấy tờ là phần đốt cuối tuần. Đây là những gì tôi đã tự động hoá trong Q1 2026 để trả lại thời gian đó.</p>

        <h2>Mockup tự sinh</h2>
        <p>Mỗi PRD cần ảnh. Tôi từng làm ảnh bằng cách mở Figma, kéo component, export PNG từng cái. Đến lúc feature thứ bốn mươi, nó nuốt nguyên một ngày mỗi spec.</p>
        <p>Thay thế: viết mockup dưới dạng HTML, render bằng Polaris Web Components của Shopify qua CDN, để script Playwright screenshot đúng kích thước. Một input script, sáu PNG ra. Vòng edit tính bằng phút, không phải giờ.</p>
        <p>Một gotcha tôi trả giá: screenshot dimension phải match HTML body dimension chính xác. Tôi mất 38 ảnh vì một script batch có height cố định, trước khi viết một function nhỏ đọc height body thật của mỗi HTML và truyền qua. Fix đó — chắc 15 dòng code — đáng giá cả pipeline.</p>

        <h2>Notion tự sync</h2>
        <p>Mỗi PRD thành một trang Notion với property: ai assign, ai follow, sprint nào, status gì, tag gì. Làm thủ công là cách PRD thành mồ côi — không sprint, không assignee, vô hình với team.</p>
        <p>Bốn script giờ làm việc đó: một đẩy PRD, một tạo dev task liên kết, một gán sprint, một giữ trang FAQ sync với user guide hiện tại. Mỗi property có default. Không gì được tạo mà thiếu sprint.</p>

        <h2>Screenshot và annotation không cần vũ đạo Chrome</h2>
        <p>Screenshot feature cho doc từng có nghĩa: mở demo store, tìm state đúng, screenshot, kéo vào editor, vẽ mũi tên, export, upload. Giờ: Playwright capture URL cụ thể ở state cụ thể, một script vẽ annotation từ JSON config, và composite tự upload lên CDN. Cùng feature ship với cùng screenshot mỗi lần.</p>

        <h2>User guide tự update khi push</h2>
        <p>User guide sống dưới dạng markdown ở GitHub. Khi tôi push, GitBook bắt ngay. Không copy-paste giữa system, không version cũ, không &ldquo;bản nào là mới nhất.&rdquo;</p>

        <h2>Những gì vẫn thủ công</h2>
        <p>Mọi thứ cần judgment. Scoping. Ưu tiên. Quyết định feature nào ship trước và tại sao. Cuộc trò chuyện với engineering về cái gì thật khó và cái gì chỉ trông khó. Một PO tự động hoá những phần đó là đã tự động hoá chính mình khỏi công việc.</p>

        <h2>Nguyên tắc</h2>
        <p>Nếu tôi làm một việc ba lần, nó thành một script. Nếu tôi lặp lại cùng một lỗi hai lần, nó thành một check trong script. Lần đầu là task. Lần hai là cảnh báo. Lần ba là cam kết.</p>
      </>
    ),
  },
};

export function getArticles(lang: Locale): Record<string, Article> {
  return lang === "vi" ? vi : en;
}

export const articleSlugs = Object.keys(en);
