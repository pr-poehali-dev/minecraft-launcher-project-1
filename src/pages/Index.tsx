import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Account {
  id: string;
  username: string;
  avatar: string;
  premium: boolean;
}

interface Server {
  name: string;
  players: string;
  ping: number;
}

const Index = () => {
  const [currentAccount, setCurrentAccount] = useState<Account>({
    id: '1',
    username: 'Steve_2077',
    avatar: '🧑‍🦲',
    premium: true
  });

  const accounts: Account[] = [
    { id: '1', username: 'Steve_2077', avatar: '🧑‍🦲', premium: true },
    { id: '2', username: 'Alex_Craft', avatar: '👩', premium: false },
    { id: '3', username: 'Herobrine', avatar: '👤', premium: true }
  ];

  const servers: Server[] = [
    { name: 'Hypixel', players: '45,231', ping: 23 },
    { name: 'MinePlex', players: '12,845', ping: 45 },
    { name: 'CubeCraft', players: '8,432', ping: 67 }
  ];

  const mods = [
    { name: 'OptiFine', version: '1.20.1', installed: true },
    { name: 'Sodium', version: '1.20.1', installed: false },
    { name: 'Shaders', version: '1.19.4', installed: true }
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8 border-4 border-border bg-card p-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary flex items-center justify-center text-2xl">
              ⛏️
            </div>
            <h1 className="pixel-font text-2xl text-foreground">MINECRAFT</h1>
          </div>

          <div className="flex items-center gap-4">
            <Select value={currentAccount.id} onValueChange={(value) => {
              const account = accounts.find(acc => acc.id === value);
              if (account) setCurrentAccount(account);
            }}>
              <SelectTrigger className="w-[200px] border-2 border-border bg-card pixel-font text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="border-2 border-border bg-card">
                {accounts.map((account) => (
                  <SelectItem key={account.id} value={account.id} className="pixel-font text-xs">
                    <div className="flex items-center gap-2">
                      <span>{account.avatar}</span>
                      <span>{account.username}</span>
                      {account.premium && <Badge className="bg-accent text-xs">PRO</Badge>}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Avatar className="w-12 h-12 border-2 border-border pixelated">
              <AvatarFallback className="bg-secondary text-2xl">{currentAccount.avatar}</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-4">
          <aside className="col-span-3">
            <Card className="border-4 border-border bg-card p-2">
              <nav className="space-y-2">
                {[
                  { name: 'Главная', icon: 'Home' },
                  { name: 'Серверы', icon: 'Server' },
                  { name: 'Моды', icon: 'Package' },
                  { name: 'Скины', icon: 'User' },
                  { name: 'Профиль', icon: 'UserCircle' },
                  { name: 'Достижения', icon: 'Trophy' },
                  { name: 'Новости', icon: 'Newspaper' },
                  { name: 'Настройки', icon: 'Settings' }
                ].map((item) => (
                  <Button
                    key={item.name}
                    variant={item.name === 'Главная' ? 'default' : 'ghost'}
                    className="w-full justify-start gap-3 border-2 border-border pixel-font text-xs h-12 hover:bg-accent"
                  >
                    <Icon name={item.icon as any} size={16} />
                    {item.name}
                  </Button>
                ))}
              </nav>
            </Card>
          </aside>

          <main className="col-span-9">
            <Tabs defaultValue="home" className="space-y-4">
              <TabsList className="grid grid-cols-4 border-4 border-border bg-card p-1">
                <TabsTrigger value="home" className="pixel-font text-xs">Главная</TabsTrigger>
                <TabsTrigger value="servers" className="pixel-font text-xs">Серверы</TabsTrigger>
                <TabsTrigger value="mods" className="pixel-font text-xs">Моды</TabsTrigger>
                <TabsTrigger value="news" className="pixel-font text-xs">Новости</TabsTrigger>
              </TabsList>

              <TabsContent value="home" className="space-y-4">
                <Card className="border-4 border-border bg-card p-8 text-center space-y-6">
                  <div className="w-24 h-24 mx-auto bg-primary flex items-center justify-center text-6xl pixelated">
                    🎮
                  </div>
                  <h2 className="pixel-font text-xl text-foreground">ГОТОВ К ИГРЕ?</h2>
                  
                  <div className="space-y-4">
                    <Select defaultValue="1.20.1">
                      <SelectTrigger className="max-w-md mx-auto border-2 border-border bg-muted pixel-font text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="border-2 border-border bg-card">
                        <SelectItem value="1.20.1" className="pixel-font text-xs">Minecraft 1.20.1</SelectItem>
                        <SelectItem value="1.19.4" className="pixel-font text-xs">Minecraft 1.19.4</SelectItem>
                        <SelectItem value="1.18.2" className="pixel-font text-xs">Minecraft 1.18.2</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button className="w-64 h-16 border-4 border-border pixel-font text-lg bg-accent hover:bg-accent/90 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
                      ▶ ИГРАТЬ
                    </Button>
                  </div>

                  <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-4">
                    <div className="border-2 border-border bg-muted p-4">
                      <div className="text-3xl mb-2">⏱️</div>
                      <p className="pixel-font text-xs text-muted-foreground">Время игры</p>
                      <p className="pixel-font text-sm text-foreground mt-1">234ч</p>
                    </div>
                    <div className="border-2 border-border bg-muted p-4">
                      <div className="text-3xl mb-2">🏆</div>
                      <p className="pixel-font text-xs text-muted-foreground">Достижения</p>
                      <p className="pixel-font text-sm text-foreground mt-1">45/100</p>
                    </div>
                    <div className="border-2 border-border bg-muted p-4">
                      <div className="text-3xl mb-2">🌍</div>
                      <p className="pixel-font text-xs text-muted-foreground">Миры</p>
                      <p className="pixel-font text-sm text-foreground mt-1">12</p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="servers" className="space-y-4">
                <Card className="border-4 border-border bg-card p-6">
                  <h3 className="pixel-font text-lg mb-4 text-foreground">ПОПУЛЯРНЫЕ СЕРВЕРЫ</h3>
                  <div className="space-y-3">
                    {servers.map((server) => (
                      <div key={server.name} className="flex items-center justify-between border-2 border-border bg-muted p-4 hover:bg-accent/20 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-secondary flex items-center justify-center text-2xl">
                            🏰
                          </div>
                          <div>
                            <p className="pixel-font text-sm text-foreground">{server.name}</p>
                            <p className="text-xs text-muted-foreground">👥 {server.players} игроков</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge className={`pixel-font text-xs ${server.ping < 50 ? 'bg-accent' : 'bg-secondary'}`}>
                            {server.ping}ms
                          </Badge>
                          <Button className="border-2 border-border pixel-font text-xs">
                            ПОДКЛЮЧИТЬСЯ
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="mods" className="space-y-4">
                <Card className="border-4 border-border bg-card p-6">
                  <h3 className="pixel-font text-lg mb-4 text-foreground">МОИ МОДЫ</h3>
                  <div className="space-y-3">
                    {mods.map((mod) => (
                      <div key={mod.name} className="flex items-center justify-between border-2 border-border bg-muted p-4">
                        <div className="flex items-center gap-4">
                          <Icon name="Package" size={24} className="text-primary" />
                          <div>
                            <p className="pixel-font text-sm text-foreground">{mod.name}</p>
                            <p className="text-xs text-muted-foreground">Версия {mod.version}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge className={`pixel-font text-xs ${mod.installed ? 'bg-accent' : 'bg-secondary'}`}>
                            {mod.installed ? '✓ Установлен' : 'Не установлен'}
                          </Badge>
                          <Button variant="outline" className="border-2 border-border pixel-font text-xs">
                            {mod.installed ? 'УДАЛИТЬ' : 'УСТАНОВИТЬ'}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="news" className="space-y-4">
                <Card className="border-4 border-border bg-card p-6">
                  <h3 className="pixel-font text-lg mb-4 text-foreground">ПОСЛЕДНИЕ НОВОСТИ</h3>
                  <div className="space-y-4">
                    {[
                      { title: 'Обновление 1.20.2', date: '15 окт 2024', emoji: '🎉' },
                      { title: 'Новый сервер PvP', date: '12 окт 2024', emoji: '⚔️' },
                      { title: 'Конкурс построек', date: '8 окт 2024', emoji: '🏗️' }
                    ].map((news) => (
                      <div key={news.title} className="border-2 border-border bg-muted p-4 hover:bg-accent/20 transition-colors">
                        <div className="flex items-start gap-4">
                          <div className="text-3xl">{news.emoji}</div>
                          <div>
                            <p className="pixel-font text-sm text-foreground mb-1">{news.title}</p>
                            <p className="text-xs text-muted-foreground">{news.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
