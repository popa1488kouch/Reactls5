import React, { useState } from 'react';

interface GameState {
  energy: number;
  hasKey: boolean;
  gameStarted: boolean;
  gameOver: boolean;
  message: string;
}

export const QuestGame: React.FC = () => {
  const [state, setState] = useState<GameState>({
    energy: 3,
    hasKey: false,
    gameStarted: false,
    gameOver: false,
    message: 'Добро пожаловать в квест! Готовы сбежать?',
  });

  const startGame = (): void => {
    setState({
      energy: 3,
      hasKey: false,
      gameStarted: true,
      gameOver: false,
      message: 'Вы заперты в комнате. Найдите ключ и откройте дверь!',
    });
  };

  const searchKey = (): void => {
    const nextEnergy = state.energy - 1;

    if (state.hasKey) {
      setState(prev => ({ ...prev, message: 'Вы уже нашли ключ! Зачем искать еще один?' }));
      return;
    }

    if (nextEnergy <= 0) {
      setState(prev => ({
        ...prev,
        energy: 0,
        gameOver: true,
        message: '💀 Вы проиграли! У вас закончилась энергия.',
      }));
      return;
    }

    const found = Math.random() > 0.5;

    if (found) {
      setState(prev => ({
        ...prev,
        energy: nextEnergy,
        hasKey: true,
        message: '🔑 Вы нашли ключ! Теперь можно открыть дверь.',
      }));
    } else {
      setState(prev => ({
        ...prev,
        energy: nextEnergy,
        message: '🔍 Вы тщательно осмотрели комнату, но ничего не нашли. Минус 1 энергия.',
      }));
    }
  };

  const rest = (): void => {
    setState(prev => ({
      ...prev,
      energy: prev.energy + 1,
      message: '😴 Вы немного передохнули и восстановили 1 энергию.',
    }));
  };

  const openDoor = (): void => {
    if (!state.hasKey) {
      setState(prev => ({
        ...prev,
        message: '🚪 Дверь заперта. Вам нужен ключ!',
      }));
      return;
    }

    setState(prev => ({
      ...prev,
      gameOver: true,
      message: '🎉 Вы сбежали! Победа!',
    }));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', fontFamily: 'sans-serif' }}>
      <h2>Квест: Побег из комнаты 🚪🎮</h2>

      {!state.gameStarted && (
        <div>
          <p>{state.message}</p>
          <button onClick={startGame} style={buttonStyle}>
            Начать игру
          </button>
        </div>
      )}

      {state.gameStarted && (
        <div>
          <div style={{ marginBottom: '15px', padding: '10px', background: '#f0f0f0', borderRadius: '5px' }}>
            <p>⚡ Энергия: <strong>{state.energy}</strong></p>
            <p>🔑 Наличие ключа: <strong>{state.hasKey ? 'Да' : 'Нет'}</strong></p>
          </div>

          <p style={{ minHeight: '40px', fontWeight: 'bold' }}>{state.message}</p>

          {!state.gameOver ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button onClick={searchKey} style={buttonStyle}>
                🔍 Искать ключ
              </button>
              <button onClick={rest} style={buttonStyle}>
                😴 Отдохнуть
              </button>
              <button onClick={openDoor} style={{ ...buttonStyle, backgroundColor: state.hasKey ? '#4CAF50' : '#ccc' }}>
                🚪 Открыть дверь
              </button>
            </div>
          ) : (
            <div style={{ marginTop: '20px' }}>
              <button onClick={startGame} style={{ ...buttonStyle, backgroundColor: '#2196F3', color: '#fff' }}>
                Начать заново
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const buttonStyle: React.CSSProperties = {
  padding: '10px 15px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

export default QuestGame;
