"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Mail,
  Phone,
  Github,
  MapPin,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  Users,
  ExternalLink,
  Calendar,
  Building2,
  Star,
  Target,
  TrendingUp,
} from "lucide-react"
import { useEffect, useState } from "react"

export default function Resume() {
  const [keywords, setKeywords] = useState<Array<{ id: number; text: string; x: number; y: number }>>([])

  const programmingKeywords = [
    "Java",
    "synchronized",
    "LCP",
    "Go",
    "Spring",
    "MySQL",
    "Redis",
    "Docker",
    "Git",
    "Maven",
    "JVM",
    "SQL",
    "Cloud",
    "Linux",
    "JSON",
    "HTTP",
    "TCP",
    "OOP",
    "REST",
    "etcd",
    "zookeeper",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      const newKeyword = {
        id: Date.now(),
        text: programmingKeywords[Math.floor(Math.random() * programmingKeywords.length)],
        x: 120, // 从电脑屏幕位置开始
        y: Math.random() * 60 + 20, // 随机高度
      }

      setKeywords((prev) => [...prev, newKeyword])

      // 清理已经移出屏幕的关键词
      setTimeout(() => {
        setKeywords((prev) => prev.filter((k) => k.id !== newKeyword.id))
      }, 6000)
    }, 1500) // 每1.5秒生成一个新关键词

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-200">
      {/* 毛玻璃背景层 - 更明显的模糊效果 */}
      <div className="fixed inset-0 bg-white/30 backdrop-blur-lg -z-10"></div>
      
      {/* 内容容器 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Personal Info Card */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-600 to-indigo-700 text-white hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="pt-8 pb-6">
                <div className="text-center">
                  {/* Photo Placeholder */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://upic-1301780692.cos.ap-shanghai.myqcloud.com/2%E5%AF%B8-1-2-20250803-133845.jpg"
                      alt="个人照片"
                      className="w-full h-full object-cover object-[center_10%] scale-90  transform rounded-full"
                    />
                  </div>
                  <h1 className="text-2xl font-bold mb-2">汪明杰</h1>
                  <p className="text-blue-100 text-lg mb-4">后台开发工程师</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-blue-100 mb-6">
                    <MapPin className="w-4 h-4" />
                    <span>男 / 2000.12</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-blue-200" />
                    <a href="tel:19121765585" className="text-white hover:text-blue-200 transition-colors">
                      19121765585
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-blue-200" />
                    <a
                      href="mailto:montywang1226@163.com"
                      className="text-white hover:text-blue-200 transition-colors break-all"
                    >
                      montywang1226@163.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Github className="w-4 h-4 text-blue-200" />
                    <a
                      href="https://github.com/wangwangwang23333"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-200 transition-colors flex items-center gap-1"
                    >
                      GitHub
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

          
            {/* Education Card */}
            <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  教育背景
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="relative pl-6 border-l-2 border-purple-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                  <div className="mb-2">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-800">同济大学</span>
                      <Badge className="bg-purple-100 text-purple-800">硕士</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">计算机科学与技术学院</p>
                    <p className="text-xs text-gray-500">2023.9 - 2026.3</p>
                  </div>
                  <p className="text-xs text-gray-600">
                    优秀学生标兵 / 学术论文 2 篇 / 专利 2 项 / 市级优秀大学生志愿者 / 担任研究生班班长
                  </p>
                </div>

                <div className="relative pl-6 border-l-2 border-purple-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-400 rounded-full"></div>
                  <div className="mb-2">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-800">同济大学</span>
                      <Badge className="bg-purple-100 text-purple-800">本科</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">软件学院 · 排名前5%</p>
                    <p className="text-xs text-gray-500">2019.9 - 2023.6</p>
                  </div>
                  <p className="text-xs text-gray-600">
                    上海市优秀毕业生 / 国家奖学金 / 国际基因工程大赛金奖 / CET6 / 担任春雨支教社团社长
                  </p>
                </div>
              </CardContent>
            </Card>

              {/* Skills Card */}
              <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  个人技能
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">Java基础</h4>
                    <p className="text-sm text-gray-600">熟悉 Java 基础知识，熟悉多线程并发，熟悉 JVM 内存模型</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">数据库</h4>
                    <p className="text-sm text-gray-600">熟练使用 MySQL 与 Redis，具备慢查询优化、索引调优等经验</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">框架</h4>
                    <p className="text-sm text-gray-600">
                    熟悉 Vue.js 、Spring Boot 等主流开发框架
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">工具</h4>
                    <p className="text-sm text-gray-600">熟悉 Git、Maven、Docker 等项目管理及构建工具</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">协作</h4>
                    <p className="text-sm text-gray-600">
                      具备良好的中英文沟通及协调能力，快速适应新环境，高效学习新技术栈并参与开发
                    </p>
                  </div>
                 
                </div>
              </CardContent>
            </Card>


            {/* 教育背景下方添加动态内容 */}


            {/* 技能雷达图 - 改为真正的雷达图 */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-2">
              <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                <Target className="w-4 h-4" />
                技能雷达
              </h4>
              <div className="flex justify-center">
                <svg width="180" height="180" viewBox="0 0 200 200" className="w-44 h-44">
                  {/* 背景网格 */}
                  <g stroke="#e5e7eb" strokeWidth="1">
                    <polygon points="100,20 150,60 150,140 100,180 50,140 50,60" fill="none" />
                    <polygon points="100,40 135,70 135,130 100,160 65,130 65,70" fill="none" />
                    <polygon points="100,60 120,80 120,120 100,140 80,120 80,80" fill="none" />
                    <polygon points="100,80 110,90 110,110 100,120 90,110 90,90" fill="none" />
                  </g>
                  
                  {/* 轴线 */}
                  <g stroke="#d1d5db" strokeWidth="1">
                    <line x1="100" y1="20" x2="100" y2="180" />
                    <line x1="50" y1="60" x2="150" y2="140" />
                    <line x1="50" y1="140" x2="150" y2="60" />
                    <line x1="20" y1="100" x2="180" y2="100" />
                    <line x1="60" y1="50" x2="140" y2="150" />
                    <line x1="60" y1="150" x2="140" y2="50" />
                  </g>
                  
                  {/* 技能标签 */}
                  <g fontSize="11" fill="#6b7280">
                    <text x="100" y="15" textAnchor="middle" className="font-medium">后端开发</text>
                    <text x="160" y="65" textAnchor="start" className="font-medium">系统设计</text>
                    <text x="160" y="135" textAnchor="start" className="font-medium">云原生</text>
                    <text x="100" y="195" textAnchor="middle" className="font-medium">算法优化</text>
                    <text x="40" y="135" textAnchor="end" className="font-medium">DevOps</text>
                    <text x="40" y="65" textAnchor="end" className="font-medium">架构设计</text>
                  </g>
                  
                  {/* 数据多边形 */}
                  <polygon 
                    points="100,35 145,55 135,125 100,165 55,125 65,55" 
                    fill="#8b5cf6" 
                    fillOpacity="0.3" 
                    stroke="#8b5cf6" 
                    strokeWidth="2"
                  />
                  
                  {/* 数据点 */}
                  <g fill="#8b5cf6">
                    <circle cx="100" cy="35" r="3" />
                    <circle cx="145" cy="55" r="3" />
                    <circle cx="135" cy="125" r="3" />
                    <circle cx="100" cy="165" r="3" />
                    <circle cx="55" cy="125" r="3" />
                    <circle cx="65" cy="55" r="3" />
                  </g>
                </svg>
              </div>
            </div>

            {/* 技术影响力统计 */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-800 mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                技术影响力
              </h4>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div>
                  <div className="text-2xl font-bold text-cyan-600">50+</div>
                  <div className="text-xs text-gray-600">代码审查</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-600">5+</div>
                  <div className="text-xs text-gray-600">技术分享</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-600">100+</div>
                  <div className="text-xs text-gray-600">Leetcode</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-600">80+</div>
                  <div className="text-xs text-gray-600">问题解决</div>
                </div>
              </div>
            </div>

            {/* 滚动装饰元素 - 从上往下粘贴效果 */}
            <div className="sticky top-4 z-40 mt-8">
              <div className="bg-gray-900 rounded-lg p-3 shadow-lg border border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-xs text-green-400">
                  <div className="flex">
                    <span className="text-gray-500 mr-2">1</span>
                    <span>const developer = {'{'}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-2">2</span>
                    <span className="ml-4">name: 'Mingjie Wang',</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-2">3</span>
                    <span className="ml-4">role: 'Backend Engineer',</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-2">4</span>
                    <span className="ml-4">skill: '++',</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-2">5</span>
                    <span className="ml-4">bugs: 0,</span>
                  </div>
                                    <div className="flex">
                    <span className="text-gray-500 mr-2">6</span>
                    <span className="ml-4">future: '∞',</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-2">7</span>
                    <span>{'}'}</span>
                  </div>
                  <div className="flex mt-1">
                    <span className="text-gray-500 mr-2">8</span>
                    <span className="text-blue-400">// keep scrolling...</span>
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Work Experience - Highlighted Section */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl transform rotate-1"></div>
              <Card className="relative shadow-2xl border-0 rounded-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
                <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-6">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Briefcase className="w-7 h-7" />
                    实习经历
                    <Star className="w-6 h-6 text-yellow-300" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 bg-white">
                  <div className="space-y-8">
                    {/* Tencent Experience */}
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full"></div>
                      <div className="pl-8">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div className="flex items-center gap-3 mb-2 md:mb-0">
                            <Building2 className="w-6 h-6 text-green-600" />
                            <span className="font-bold text-xl text-gray-800">Tencent 腾讯</span>
                            <Badge className="bg-green-100 text-green-800 font-semibold">Go开发</Badge>
                            <Badge variant="outline" className="border-green-300 text-green-700">
                              当前
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>2025.4 - 至今</span>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-4">
                          <h4 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                            <Star className="w-4 h-4" />
                            核心成果
                          </h4>
                          <div className="grid md:grid-cols-4 gap-4">
                            {/* 左边大数字 */}
                            <div className="bg-white rounded-lg p-6 border border-green-200 flex flex-col items-center justify-center text-center">
                              <div className="text-4xl font-bold text-green-600 mb-1">3</div>
                              <div className="font-semibold text-green-700 text-sm">项发明专利</div>
                            </div>
                            
                            {/* 右边三项专利并排 */}
                            <div className="md:col-span-3 grid md:grid-cols-3 gap-3">
                              <div className="bg-white rounded-lg p-4 border border-green-200 hover:shadow-md transition-shadow">
                                <div className="font-semibold text-green-700 text-sm mb-2">基于内存数据流的ETCD快照备份方法</div>
                                <div className="text-xs text-gray-600 leading-relaxed">
                                  实现边生成边上传的流式备份方案，<b>提升备份效率30%</b>
                                </div>
                              </div>
                              
                              <div className="bg-white rounded-lg p-4 border border-green-200 hover:shadow-md transition-shadow">
                                <div className="font-semibold text-green-700 text-sm mb-2">Zookeeper的逻辑备份及恢复方法</div>
                                <div className="text-xs text-gray-600 leading-relaxed">
                                  基于逻辑备份的Zookeeper流式备份与恢复方案，实现数据备份的自动化
                                </div>
                              </div>
                              
                              <div className="bg-white rounded-lg p-4 border border-green-200 hover:shadow-md transition-shadow">
                                <div className="font-semibold text-green-700 text-sm mb-2">多层校验的文件完整性保障方法</div>
                                <div className="text-xs text-gray-600 leading-relaxed">
                                  基于分段ETag与二级校验算法的双重校验机制，确保数据文件的完整性
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <ul className="space-y-3 text-sm text-gray-700">
                          <li className="flex gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <strong className="text-gray-800">Etcd 与 Zookeeper 备份恢复及性能优化</strong>
                              ：设计并落地 Etcd 流式备份方案，实现"边生成边上传"，将整体备份效率
                              <span className="bg-yellow-100 px-1 rounded font-semibold">提升约 30%</span>；设计并实现
                              Zookeeper 逻辑备份方案；上述方案已申请
                              <span className="bg-yellow-100 px-1 rounded font-semibold">发明专利两项</span>；
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <strong className="text-gray-800">备份全流程支持与一致性保障</strong>
                              ：基于上述方案，支持定时备份、备份进度上报、备份集上传等功能；引入
                              <span className="bg-blue-100 px-1 rounded font-semibold">分布式锁机制</span>
                              ，保障多节点环境下任务执行的唯一性；
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <strong className="text-gray-800">数据完整性与稳定性构建</strong>：支持 MySQL{" "}
                              <span className="bg-blue-100 px-1 rounded font-semibold">库表级逻辑备份</span>；构建
                              <span className="bg-blue-100 px-1 rounded font-semibold">备份集校验机制</span>，支持 COS /
                              OBS / S3 等多种存储介质，实现基于 CRC64 与分段 ETag
                              的双重校验方案，保障端到端数据完整性；定义核心告警事件，并接入告警中台，实现故障自动发现与闭环响应能力。
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* NIO Experience */}
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-indigo-600 rounded-full"></div>
                      <div className="pl-8">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div className="flex items-center gap-3 mb-2 md:mb-0">
                            <Building2 className="w-6 h-6 text-blue-600" />
                            <span className="font-bold text-xl text-gray-800">NIO 蔚来汽车</span>
                            <Badge className="bg-blue-100 text-blue-800 font-semibold">Java开发</Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>2022.1 - 2022.7</span>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-4">
                          <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                            <Star className="w-4 h-4" />
                            性能优化成果
                          </h4>
                          <div className="bg-white rounded-lg p-4 border border-blue-200">
                            <div className="text-center">
                              <div className="font-semibold text-blue-700">接口响应时间优化</div>
                              <div className="text-3xl font-bold text-blue-600 my-2">2s → 300ms</div>
                              <div className="text-sm text-gray-600">性能提升约 85%</div>
                            </div>
                          </div>
                        </div>

                        <ul className="space-y-3 text-sm text-gray-700">
                          <li className="flex gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              参与数据可视化平台开发，基于{" "}
                              <span className="bg-blue-100 px-1 rounded font-semibold">Spring Task</span>{" "}
                              动态注册机制实现数据集的差异化配置和多频率动态更新；
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              通过<span className="bg-blue-100 px-1 rounded font-semibold">线程池</span>
                              的应用提高数据集更新效率，结合惰性更新策略减少冗余 API 调用；
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              基于慢日志分析优化 SQL 索引设计，集成 Redis 缓存热点数据，接口平均响应时间从{" "}
                              <span className="bg-yellow-100 px-1 rounded font-semibold">2s 优化至 300ms</span>。
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Projects Section */}
            <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Code className="w-6 h-6" />
                  项目经历
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <h3 className="font-bold text-lg text-gray-800">实时协同编程工具 CoIDEA 和 CoVSCode</h3>
                    <Badge variant="outline" className="border-indigo-300 text-indigo-700">
                      Java
                    </Badge>
                    <Badge variant="outline" className="border-indigo-300 text-indigo-700">
                      TypeScript
                    </Badge>
                    <Badge variant="outline" className="border-indigo-300 text-indigo-700">
                      JGit
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>项目描述</strong>：基于 IntelliJ IDEA 和 VS Code
                    代码编辑器构建的支持实时协同编程等一系列功能的插件
                  </p>
                  <div>
                    <p className="text-sm font-semibold mb-3 text-gray-800">核心技术实现：</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex gap-3">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          实现 <span className="bg-indigo-100 px-1 rounded font-semibold">OT</span>（Operational
                          Transformation）算法，确保多站点间代码文本的增量式实时同步；
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          将代码结构解析为<span className="bg-indigo-100 px-1 rounded font-semibold">抽象语法树</span>
                          （AST），实现基于依赖的自动锁定方案，从而预防语义冲突；
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>集成 JGit，实现协同会话中代码版本的细粒度管理和与远端仓库同步的功能。</div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <h3 className="font-bold text-lg text-gray-800">归宿——民宿预订系统</h3>
                    <Badge variant="outline" className="border-emerald-300 text-emerald-700">
                      Spring Cloud
                    </Badge>
                    <Badge variant="outline" className="border-emerald-300 text-emerald-700">
                      MySQL
                    </Badge>
                    <Badge variant="outline" className="border-emerald-300 text-emerald-700">
                      Redis
                    </Badge>
                    <Badge variant="outline" className="border-emerald-300 text-emerald-700">
                      Docker
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>项目描述</strong>：基于 Vue.js 和 Spring Cloud
                    开发的前后端分离民宿预订平台，覆盖从下单到支付等一系列功能
                  </p>
                  <div>
                    <p className="text-sm font-semibold mb-3 text-gray-800">架构设计与优化：</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          基于 <span className="bg-emerald-100 px-1 rounded font-semibold">Spring Cloud</span>{" "}
                          开发微服务，并在多台服务器上部署实例，以提升系统并发能力和可用性；
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          基于 <span className="bg-emerald-100 px-1 rounded font-semibold">Spring Cloud Gateway</span>
                          ，集成 <span className="bg-emerald-100 px-1 rounded font-semibold">SaToken</span> 实现支持{" "}
                          <span className="bg-emerald-100 px-1 rounded font-semibold">RBAC权限模型</span>{" "}
                          的微服务统一鉴权，通过{" "}
                          <span className="bg-emerald-100 px-1 rounded font-semibold">RedisLimitRater</span>（
                          <span className="bg-emerald-100 px-1 rounded font-semibold">令牌桶算法</span>
                          ）实现分布式限流；
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          使用 <span className="bg-emerald-100 px-1 rounded font-semibold">Redis</span>{" "}
                          缓存高频查询，优化查询性能；结合{" "}
                          <span className="bg-emerald-100 px-1 rounded font-semibold">Redisson</span>{" "}
                          实现分布式锁及超时订单的延迟删除；
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>集成高德地图、支付宝沙盒环境、身份证 OCR等外部 API，实现地图展示、逆地理编码等功能。</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Academic Achievements */}
            <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Award className="w-6 h-6" />
                  科研成果
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                  <h4 className="font-bold mb-4 text-yellow-800 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    论文发表
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-yellow-200">
                      <p className="font-semibold text-gray-800 mb-2">
                        A Novel Request-Invitation-Approval Scheme for Flexible Semantic Conflict Prevention in
                        Real-Time Collaborative Programming
                      </p>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-yellow-100 text-yellow-800">CSCWD 2024</Badge>
                        <Badge variant="outline">IEEE国际学术会议</Badge>
                        <a
                        href="https://ieeexplore.ieee.org/abstract/document/10580253"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center gap-1 text-sm"
                      >
                        查看论文 <ExternalLink className="w-3 h-3" />
                      </a>
                      </div>
                      
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-yellow-200">
                      <p className="font-semibold text-gray-800 mb-2">
                        Annotation-based Semantic Conflict Prevention in Real-time Collaborative Programming: Approach,
                        Techniques, Prototype, and User Study
                      </p>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-yellow-100 text-yellow-800">IEEE SMC 2024</Badge>
                        <Badge variant="outline">CCF推荐国际学术会议</Badge>
                        <a
                        href="https://ieeexplore.ieee.org/abstract/document/10831572"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center gap-1 text-sm"
                      >
                        查看论文 <ExternalLink className="w-3 h-3" />
                      </a>
                      </div>
                      
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                  <h4 className="font-bold mb-3 text-purple-800 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    发明专利
                  </h4>
                  <div className="bg-white rounded-lg p-4 border border-purple-200">
                    <p className="font-semibold text-gray-800 mb-2">
                      一种语义冲突预防方法
                    </p>
                    <p className="text-sm text-gray-600">
                      针对实时协同编程中语义冲突问题，采用申请-审批等机制平衡实时协同编程自由度和冲突预防之间的关系。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Activities */}
            <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Users className="w-6 h-6" />
                  社会活动
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* 梦想教室项目 - 放在最上面 */}
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                    <h4 className="font-bold mb-3 text-orange-800">"梦想教室"项目 (2024年7月-8月)</h4>

                    {/* 增大照片区域 */}
                    <div className="mb-4 flex justify-center">
                      <div className="w-48 h-32 bg-white rounded-lg border-2 border-orange-200 flex items-center justify-center overflow-hidden">
                        <img
                          src="https://upic-1301780692.cos.ap-shanghai.myqcloud.com/%E6%97%A0%E4%BA%BA%E6%9C%BA%E7%85%A7%E7%89%87-20250803-133918.png"
                          alt="梦想教室照片"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>

                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>参与"梦想教室"的设计和施工过程</div>
                      </li>
                      <li className="flex gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          利用专业知识设计"与AI对话"课程，为孩子们拍照并了解理想职业后，通过AI生成未来职业照，激发职业想象；课外引导学生动手操作并控制无人机
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>个人荣获
                          <span className="bg-orange-100 px-2 py-1 rounded font-semibold">
                              市级优秀大学生志愿者
                            </span>
                          
                          </div>
                      </li>
                    </ul>
                  </div>

                  {/* 春雨支教社团和研究生班班长 - 重新布局为左侧垂直叠放 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* 左侧垂直叠放的两个卡片 */}
                    <div className="space-y-6">
                      {/* 研究生班班长 - 在上 */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                        <h4 className="font-bold mb-3 text-blue-800">研究生班班长 (2023年至今)</h4>
                        <p className="text-sm text-gray-700 mb-4">
                          担任软件工程研究生班班长，负责班级日常事务管理和同学间的沟通协调工作
                        </p>

                        <div className="space-y-2 text-sm text-gray-700">
                          <div className="flex gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>组织班级学术交流活动和团建活动</div>
                          </div>
                          <div className="flex gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>建立班级信息共享平台，提高信息传达效率</div>
                          </div>
                        </div>
                      </div>

                      {/* 院学生会组长 - 在下 */}
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                        <h4 className="font-bold mb-3 text-purple-800">院学生会组长 (2024-2025年)</h4>
                        <p className="text-sm text-gray-700 mb-4">
                          担任学院学生会学风建设组组长，组织博思论坛等活动
                        </p>

                        {/* <div className="space-y-2 text-sm text-gray-700">
                          <div className="flex gap-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>策划组织学院迎新晚会、学术讲座等大型活动</div>
                          </div>
                        </div> */}
                      </div>
                    </div>

                    {/* 右侧单个卡片 - 春雨支教社团 */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                      <h4 className="font-bold mb-3 text-green-800">春雨支教社团社长 (2019-2020年)</h4>

                      {/* 增大照片区域 */}
                      <div className="mb-4 flex justify-center">
                        <div className="w-40 h-28 bg-white rounded-lg border-2 border-green-200 flex items-center justify-center overflow-hidden">
                          <img
                            src="https://upic-1301780692.cos.ap-shanghai.myqcloud.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250730180148_7-20250803-133944.jpg"
                            alt="支教活动照片"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>

                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>负责社团内外事务管理、活动组织</div>
                        </li>
                        <li className="flex gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>作为团队领队，带领其他14名同学前往江西省吉安市遂川县开展为期两周的暑期夏令营活动</div>
                        </li>
                        <li className="flex gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>负责协调组员分工，联系相关学校，安排每日教学进程以及组织最后的文艺汇演等工作</div>
                        </li>
                        <li className="flex gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="bg-green-100 px-2 py-1 rounded font-semibold">
                              项目荣获同济大学优秀青年志愿服务项目
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 底部编程动画区域 */}
            <div className="relative h-48 mt-12 overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
              {/* 动态网格背景 */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(59,130,246,0.3)_25px,rgba(59,130,246,0.3)_26px,transparent_27px),linear-gradient(rgba(59,130,246,0.3)_1px,transparent_1px)] bg-[size:25px_25px] animate-[grid_20s_linear_infinite]"></div>
              </div>

              {/* 数据流线条 */}
              <div className="absolute top-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[dataflow_3s_ease-in-out_infinite]"></div>
              <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent animate-[dataflow_4s_ease-in-out_infinite_1s]"></div>
              <div className="absolute bottom-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-[dataflow_5s_ease-in-out_infinite_2s]"></div>

              {/* 左侧程序员工作站 */}
              <div className="absolute left-4 bottom-4 flex items-end gap-3">
                {/* 程序员图标 */}
                <div className="relative">
                <div className="w-16 h-16  flex items-center justify-center shadow-md">
                  <span className="text-white text-xl font-bold">👨‍💻</span>
                </div>
                  {/* 思考气泡 */}
                  <div className="absolute -top-8 -right-2 w-8 h-6 bg-white rounded-lg opacity-90 animate-pulse shadow-lg">
                    <div className="text-xs text-center pt-1">💡</div>
                    <div className="absolute -bottom-1 left-2 w-2 h-2 bg-white transform rotate-45"></div>
                  </div>
                  {/* 打字动画指示 */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>

                {/* 电脑设备 - 放大版 */}
                <div className="relative">
                  {/* 显示器 - 增大尺寸 */}
                  <div className="w-20   h-16 bg-gray-800 rounded border-2 border-gray-600 relative">
                    {/* 屏幕内容 - 更大更清晰 */}
                    <div className="absolute inset-1 bg-black rounded overflow-hidden">
                      <div className="text-green-200 text-xs font-mono p-2 leading-tight animate-[code_2s_ease-in-out_infinite]">
                        <div className="text-cyan-200">{"$ npm run serve"}</div>
                        <div className="text-purple-200">{"🚀 Building"}</div>
                      </div>
                    </div>
                    {/* 屏幕发光效果 */}
                    <div className="absolute inset-0 bg-green-400 rounded opacity-10 animate-pulse"></div>
                    {/* 屏幕边框发光 */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded opacity-20 animate-pulse"></div>
                  </div>
                  {/* 显示器底座 */}
                  <div className="w-10 h-3 bg-gray-600 mx-auto rounded-b relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-gray-500 rounded"></div>
                  </div>
                  {/* 键盘 - 稍微放大 */}
                  <div className="w-18 h-7 bg-gray-700 rounded mt-1 relative shadow-lg">
                    <div className="absolute inset-0.5 bg-gray-800 rounded grid grid-cols-10 gap-px p-1">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div
                          key={i}
                          className="bg-gray-600 rounded-sm animate-[keypress_2s_ease-in-out_infinite] hover:bg-blue-500 transition-colors"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        ></div>
                      ))}
                    </div>
                    {/* 键盘发光效果 */}
                    <div className="absolute inset-0 bg-blue-400 rounded opacity-5 animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* 中间服务器机架 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4">
                <div className="w-14 h-20 bg-gray-700 rounded border border-gray-500 relative">
                  {/* 服务器指示灯 */}
                  <div className="absolute top-2 left-2 flex gap-1">
                    <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                    <div className="w-1 h-1 bg-red-400 rounded-full animate-pulse delay-700"></div>
                  </div>
                  {/* 服务器层 */}
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-10 h-3 bg-gray-600 left-2 border border-gray-500 rounded-sm"
                      style={{ top: `${8 + i * 4}px` }}
                    >
                      <div
                        className="w-1 h-1 bg-green-400 rounded-full mt-1 ml-1 animate-pulse"
                        style={{ animationDelay: `${i * 0.5}s` }}
                      ></div>
                    </div>
                  ))}
                  {/* 数据传输效果 */}
                  <div className="absolute -top-2 left-1/2 w-px h-4 bg-cyan-400 animate-[pulse_1s_ease-in-out_infinite]"></div>
                </div>
              </div>

              {/* 右侧云服务器 */}
              <div className="absolute right-8 bottom-6">
                {/* 云朵形状 */}
                <div className="relative">
                  <div className="w-12 h-6 bg-white rounded-full opacity-90 relative">
                    <div className="absolute -left-2 top-1 w-6 h-4 bg-white rounded-full"></div>
                    <div className="absolute -right-1 top-0 w-4 h-4 bg-white rounded-full"></div>
                    <div className="absolute left-2 -top-1 w-6 h-4 bg-white rounded-full"></div>
                    {/* 云内图标 */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-xs text-gray-600">☁️</div>
                    </div>
                  </div>
                  {/* 上传下载箭头 */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="text-green-400 animate-bounce">↑</div>
                    <div className="text-blue-400 animate-bounce delay-500">↓</div>
                  </div>
                </div>
              </div>

              {/* 飘动的编程关键词 - 增强版 */}
              {keywords.map((keyword) => (
                <div
                  key={keyword.id}
                  className="absolute text-sm font-mono font-semibold px-3 py-1 rounded-full shadow-lg animate-[enhancedFloat_6s_linear_forwards]"
                  style={{
                    left: `${keyword.x}px`,
                    top: `${keyword.y}px`,
                    background: `linear-gradient(45deg, hsl(${Math.random() * 360}, 70%, 60%), hsl(${Math.random() * 360}, 70%, 70%))`,
                    color: "white",
                    transform: `rotate(${Math.random() * 20 - 10}deg)`,
                  }}
                >
                  {keyword.text}
                  {/* 粒子效果 */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                </div>
              ))}

              {/* 连接线动画 */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                {/* 程序员到服务器的连接 */}
                <line
                  x1="80"
                  y1="100"
                  x2="200"
                  y2="80"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  className="animate-[connection_3s_ease-in-out_infinite]"
                />
                {/* 服务器到云的连接 */}
                <line
                  x1="200"
                  y1="60"
                  x2="320"
                  y2="70"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  className="animate-[connection_3s_ease-in-out_infinite_1s]"
                />
              </svg>
            </div>

            {/* 添加自定义动画样式 */}
            <style jsx>{`
              @keyframes enhancedFloat {
                0% {
                  transform: translateX(0) translateY(0) rotate(0deg) scale(0.8);
                  opacity: 0;
                }
                10% {
                  opacity: 1;
                  transform: translateX(50px) translateY(-5px) rotate(5deg) scale(1);
                }
                50% {
                  transform: translateX(calc(50vw - 60px)) translateY(-15px) rotate(-3deg) scale(1.1);
                }
                100% {
                  transform: translateX(calc(100vw - 120px)) translateY(-25px) rotate(10deg) scale(0.9);
                  opacity: 0;
                }
              }
              
              @keyframes typing {
                0%, 100% { transform: translateY(0) rotate(0deg); }
                50% { transform: translateY(-2px) rotate(5deg); }
              }
              
              @keyframes code {
                0% { opacity: 0.7; transform: translateY(0); }
                25% { opacity: 1; transform: translateY(-1px); }
                50% { opacity: 0.9; transform: translateY(0); }
                75% { opacity: 1; transform: translateY(-1px); }
                100% { opacity: 0.7; transform: translateY(0); }
              }
              
              @keyframes keypress {
                0%, 100% { transform: translateY(0); background-color: rgb(75, 85, 99); }
                50% { transform: translateY(-1px); background-color: rgb(96, 165, 250); }
              }
              
              @keyframes grid {
                0% { transform: translate(0, 0); }
                100% { transform: translate(25px, 25px); }
              }
              
              @keyframes dataflow {
                0%, 100% { opacity: 0; transform: translateX(-100%); }
                50% { opacity: 1; transform: translateX(0); }
              }
              
              @keyframes connection {
                0%, 100% { stroke-dasharray: 0, 100; }
                50% { stroke-dasharray: 50, 50; }
              }
            `}</style>

          </div>
        </div>
      </div>
    </div>
  )
}
