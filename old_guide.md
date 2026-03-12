---
title: OpenClaw锛堝皬榫欒櫨锛夊彶涓婃渶鍏ㄦ墜鎶婃墜鐨勪繚濮嗙骇瀹夎閰嶇疆鏁欑▼锛?026骞?鏈?0鏃ユ渶鏂扮増锛?description: 2026骞存渶鏂?OpenClaw 瀹夎鏁欑▼锛屾兜鐩?Windows銆乵acOS 涓?Linux 骞冲彴锛屾墜鎶婃墜鏁欎綘閰嶇疆 API Key銆佹帴鍏ラ涔?Telegram 鏈哄櫒浜猴紝鎵撻€犱綘鐨勪釜浜?AI 鏅鸿兘浣撱€?---

# OpenClaw (灏忛緳铏? 鍙蹭笂鏈€鍏ㄦ墜鎶婃墜淇濆绾ф暀绋?
![OpenClaw Banner](/assets/img/guide/openclaw/banner.webp)

**鍙戝竷鏃ユ湡锛?026骞?鏈?0鏃?(鏈€鏂扮増)**

**OpenClaw** (淇楃О鈥滃皬榫欒櫨鈥? 鏄竴涓紑婧愮殑 AI 鏅鸿兘浣撶綉缁滐紝瀹冨彲浠ヨ浣犺交鏉惧湴鎶婂悇绫诲ぇ妯″瀷 (ChatGPT, Claude, Kimi 绛? 鎺ュ叆鍒颁綘甯哥敤鐨勮亰澶╄蒋浠讹紙椋炰功銆乀elegram銆乄hatsApp 绛夛級涓紝鎵撻€犲睘浜庝綘鑷繁鐨?7x24 灏忔椂鍦ㄧ嚎 AI 鍔╃悊銆?
鏈暀绋嬫暣鍚堜簡鍏ㄧ綉鏈€鏂拌祫婧愶紝鏃ㄥ湪閫氳繃鏈€閫氫織鏄撴噦鐨勮瑷€锛屽甫浣犱粠闆跺紑濮嬪畬鎴?OpenClaw 鐨勯儴缃层€?
---

## 馃洜锔?涓€銆?鍑嗗宸ヤ綔锛氱幆澧冩惌寤?
OpenClaw 鍩轰簬 Node.js 杩愯锛屽洜姝や綘鐨勭數鑴戝繀椤诲厛瀹夎鍚堥€傜殑鐜銆?
### 1. 绯荤粺瑕佹眰
- **macOS / Linux**: 鍘熺敓鏀寔锛屼綋楠屾渶浣炽€?- **Windows**: 寤鸿浣跨敤 **WSL2** (Windows Subsystem for Linux) 鎴栧師鐢熺殑 **PowerShell** (闇€ Node.js 22+)銆?
### 2. 瀹夎 Node.js (鎺ㄨ崘浣跨敤 nvm 绠＄悊)
鎴戜滑鎺ㄨ崘瀹夎鏈€鏂扮殑 **Node.js 22** 鐗堟湰銆?
- **Windows 鐢ㄦ埛**锛?  1. 涓嬭浇 [nvm-setup.exe](https://github.com/coreybutler/nvm-windows/releases) 骞跺畨瑁呫€?  2. 浠ョ鐞嗗憳鏉冮檺鎵撳紑 PowerShell锛岃繍琛岋細
     ```powershell
     nvm install 22
     nvm use 22
     ```
- **macOS/Linux 鐢ㄦ埛**锛?  浣跨敤瀹樻柟瀹夎鑴氭湰锛?  ```bash
  curl -fsSL https://fnm.vercel.app/install | bash
  fnm install 22
  ```

---

## 馃殌 浜屻€?瀹夎 OpenClaw

### 1. 瀹樻柟涓€閿畨瑁?(鏈€鎺ㄨ崘)
杩欐槸鏈€绠€鍗曘€佹渶绋冲Ε鐨勬柟娉曘€?
- **Windows (PowerShell)**:
  ```powershell
  iwr -useb https://openclaw.ai/install.ps1 | iex
  ```
- **macOS / Linux (Terminal)**:
  ```bash
  curl -fsSL https://openclaw.ai/install.sh | bash
  ```

### 2. 鎵嬪姩瀹夎 (澶囬€?
濡傛灉浣犵啛鎮?npm 鎴?pnpm锛屼篃鍙互鐩存帴瀹夎锛?```bash
npm install -g openclaw@latest
# 鎴栬€?pnpm add -g openclaw@latest
```

![瀹夎杩囩▼绀烘剰鍥綸(/assets/img/guide/openclaw/install.png)

---

## 鈿欙笍 涓夈€?鍒濆閰嶇疆锛氳灏忛緳铏捐窇璧锋潵

鍦ㄧ粓绔腑杈撳叆浠ヤ笅鍛戒护鍚姩鍚戝锛?
```bash
openclaw onboard --flow quickstart
```

### 鍚戝鍏抽敭姝ラ璇存槑锛?1. **椋庨櫓纭**锛氶亣鍒?`Continue?` 閫?`Yes`銆?2. **閫夋嫨妯″瀷**锛氳緭鍏ヤ綘鐨?API Key銆傛敮鎸?OpenAI, Anthropic (Claude), DeepSeek, Kimi 绛夈€?3. **宸ヤ綔鐩綍**锛氶粯璁ゅ洖杞﹀嵆鍙?(閫氬父鍦?`~/.openclaw/`)銆?4. **鍚姩缃戝叧**锛氶厤缃畬鎴愬悗锛岀郴缁熶細鍚姩 Gateway銆?
瀹屾垚涓婅堪姝ラ鍚庯紝娴忚鍣ㄤ細鑷姩鎵撳紑鎺у埗鍙帮紙榛樿鍦板潃锛歚http://127.0.0.1:18789/`锛夈€?
---

## 馃 鍥涖€?杩涢樁閰嶇疆锛氭帴鍏ラ涔?(Lark) 鏈哄櫒浜?
杩欐槸鐩墠鍥藉唴鐢ㄦ埛鏈€甯哥敤鐨勫満鏅€?
### 1. 瀹夎椋炰功鎻掍欢
鍦ㄦ帶鍒跺彴鎴栫粓绔墽琛岋細
```bash
openclaw plugins install @m1heng-clawd/feishu
```

### 2. 椋炰功寮€鏀惧钩鍙伴厤缃?1. 璁块棶 [椋炰功寮€鏀惧钩鍙癩(https://open.feishu.cn/)锛屽垱寤轰竴涓嚜寤哄簲鐢ㄣ€?2. **鍚敤鏈哄櫒浜?*锛氬湪搴旂敤璇︽儏椤靛紑鍚満鍣ㄤ汉鍔熻兘銆?3. **鑾峰彇瀵嗛挜**锛氬鍒?`App ID` 鍜?`App Secret` 绮樿创鍒?OpenClaw 閰嶇疆涓€?4. **鏉冮檺鐢宠**锛氳繘鍏モ€滄潈闄愮鐞嗏€濓紝閫夋嫨鎵归噺瀵煎叆锛岀矘璐翠互涓?JSON 鏉冮檺鍖咃細
   ```json
   { "scopes": { "tenant": [ "im:message", "im:message:send_as_bot", "im:chat:readonly" ] } }
   ```
5. **浜嬩欢璁㈤槄**锛氶€夋嫨鈥滈暱杩炴帴鈥濇帴鏀朵簨浠讹紝骞舵坊鍔?`im.message.receive_v1` 浜嬩欢銆?6. **鐗堟湰鍙戝竷**锛氬垱寤虹増鏈苟鐢宠涓婄嚎銆?
![椋炰功閰嶇疆绀烘剰鍥綸(/assets/img/guide/openclaw/feishu_config.png)

### 3. 寮€濮嬪璇?鍦ㄩ涔﹂噷鎵惧埌浣犵殑鏈哄櫒浜猴紝灏濊瘯鍙戦€佷竴鏉℃秷鎭€傚畠浼氬紩瀵间綘瀹屾垚鏈€鍚庣殑閰嶅銆?
![鎴愬姛瀵硅瘽鎴浘](/assets/img/guide/openclaw/success_reply.png)

---

## 馃洝锔?浜斻€?甯歌闂涓庢帓鍧戞寚鍗?
| 闂鐜拌薄 | 瑙ｅ喅鏂规硶 |
| :--- | :--- |
| **Node 鐗堟湰鎶ラ敊** | 纭 `node -v` 缁撴灉涓?22+銆?|
| **绔彛 18789 琚崰鐢?* | 浣跨敤 `openclaw gateway --port 18790` 鏇存崲绔彛銆?|
| **椋炰功涓嶅洖娑堟伅** | 妫€鏌モ€滀簨浠惰闃呪€濋噷鐨勯暱杩炴帴鏄惁澶勪簬鈥滃凡杩炴帴鈥濈姸鎬併€?|
| **Windows 璺緞澶辨晥** | 灏濊瘯鍏抽棴褰撳墠绐楀彛骞堕噸鏂扮敤绠＄悊鍛樻潈闄愭墦寮€ PowerShell銆?|

---

> **馃挕 灏忚创澹?*锛歄penClaw 鐨勫己澶т箣澶勫湪浜庡叾 **Skill (鎶€鑳?** 绯荤粺銆備綘鍙互闅忕潃娣卞叆浣跨敤锛屾參鎱㈢粰瀹冩坊鍔犫€滆仈缃戞悳绱⑩€濄€佲€滅敓鎴愬浘鐗団€濈瓑鍚勭瓒呰兘鍔涖€?
---

- [鍥炲埌棣栭〉](../index.md)
- [鏌ョ湅鏇村 AI 宸ュ叿鎸囧崡](./README.md)
- [鑾峰彇绉戝涓婄綉鏀寔](/proxy/)
