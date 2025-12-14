# --- Stage 1: Build ---
# ใช้ Node image สำหรับการ Build (ใช้ alpine เพื่อความเบา)
FROM node:20-alpine AS builder

# กำหนด Working Directory
WORKDIR /app

# Copy ไฟล์ package.json และ lock file มาก่อนเพื่อ install dependencies
# (การแยกขั้นตอนนี้ช่วยให้ Docker caching ทำงานได้ดีขึ้นถ้า code เปลี่ยนแต่ dep ไม่เปลี่ยน)
COPY package*.json ./

# Install dependencies ทั้งหมด (รวม devDependencies ด้วยเพื่อใช้ build)
# ใช้ npm ci จะเร็วกว่าและแน่นอนกว่า npm install ใน env นี้
RUN npm ci

# Copy source code ทั้งหมดเข้าไป
COPY . .

# ทำการ Build project (จะได้ folder /dist ออกมา)
RUN npm run build

# --- Stage 2: Production ---
# เริ่มต้น Image ใหม่ที่สะอาดและเล็ก
FROM node:20-alpine AS production

# กำหนด environment เป็น production
ENV NODE_ENV production

WORKDIR /app

# Copy package.json มาเพื่อ install เฉพาะ production dependencies
COPY package*.json ./

# Install เฉพาะ dependencies ที่จำเป็นสำหรับการรัน (ไม่เอา devDependencies)
RUN npm ci --only=production && npm cache clean --force

# Copy ไฟล์ที่ Build เสร็จแล้วจาก Stage 1 (builder) มาที่นี่
COPY --from=builder /app/dist ./dist

# เปิด Port (NestJS default คือ 3000)
EXPOSE 3000

# คำสั่งรัน Server
CMD ["node", "dist/main"]