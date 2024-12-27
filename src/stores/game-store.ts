import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

type ActionCardProps = {
  title: string
  artText: string
  actionText: string[]
  imageUrl: string
}

function populateActionCards() {
  return [
    {
      title: 'Rock Of Ages',
      artText: 'Still rollin.',
      actionText: [
        'Убери свою текущую машинку с поля - она считается упавшей.',
        'Запусти валун вместо машинки.',
        'Потом убери валун с поля.',
      ],
      imageUrl: '/src/assets/action-cards/rock.jpg',
    },
    {
      title: 'Не такой как все',
      artText: 'Ты приезжаешь на игру на своем ведре.',
      actionText: [
        'Твоя текущая машинка полностью убирается из игры.',
        'Вместо нее возьми секретный транспорт.',
      ],
      imageUrl: '/src/assets/action-cards/secret.jpg',
    },
    {
      title: 'Эффект бабочки',
      artText:
        'У тебя был такой мощный разгон, что сгорел двигатель. А еще ты перемещаешься назад во времени.',
      actionText: [
        'Запусти свою текущую машинку.',
        'Ты не получишь очков.',
        'Возьми эту же машинку и запусти ее еще раз по обычным правилам.',
      ],
      imageUrl: '/src/assets/action-cards/timelapse.jpg',
    },
    {
      title: 'Работа не волк',
      artText: 'Рабочий перепутал время и пришел подготавливать поле к игре.',
      actionText: ['Верни на поле все упавшие базовые препятствия.'],
      imageUrl: '/src/assets/action-cards/worker.jpg',
    },
    {
      title: 'Машины в розыске',
      artText: 'Организаторы не смогли договориться с приемщиком автохлама.',
      actionText: ['Верни на поле все упавшие машинки.', 'Положи их вверх ногами.'],
      imageUrl: '/src/assets/action-cards/police.jpg',
    },
    {
      title: 'Хитрец',
      artText: 'Ты подкупаешь организаторов, чтобы получить преимущество.',
      actionText: ['Запусти машинку с любой стороны.'],
      imageUrl: '/src/assets/action-cards/money.jpg',
    },
    {
      title: 'Эколог',
      artText: 'В отличие от других игроков ты заботишься об окружающей среде.',
      actionText: ['Посади лес.', 'Деревья должны находится в небольшом воображаемом квадрате.'],
      imageUrl: '/src/assets/action-cards/trees.jpg',
    },
    {
      title: 'Техосмотр',
      artText: 'Твое корыто было на техосмотре и тебе не удалось приехать на игру вовремя.',
      actionText: [
        'Пропусти ход.',
        'В конце игры ты запустишь оставшуюся машинку по обычным правилам.',
      ],
      imageUrl: '/src/assets/action-cards/station.jpg',
    },
    {
      title: 'KFC',
      artText: 'У кого-то из участников из окна автомобиля выпал баскет с острыми крылышками.',
      actionText: ['Брось горсть курочек в центр поля.'],
      imageUrl: '/src/assets/action-cards/chikens.jpg',
    },
    {
      title: 'Секретные материалы',
      artText:
        'Пришельцы похитили самую грязную рухлядь, чтобы проверить на ней свой новый шампунь. Вскоре машина упала с неба недалеко от игрового поля.',
      actionText: ['Убери с поля любую машинку.', 'Она считается упавшей.'],
      imageUrl: '/src/assets/action-cards/aliens.jpg',
    },
  ]
}

function getRandomNumber(count: number) {
  return Math.floor(Math.random() * count)
}

export const useGameStore = defineStore('game-store', () => {
  const isGameConsistent = ref(false)
  const playerCount = ref(0)
  const playerOrders = ref<number[]>([])
  const selectedActionCard = ref<ActionCardProps | null>(null)
  const actionCards = ref<ActionCardProps[]>([])
  const actionCardCount = computed(() => actionCards.value.length)

  const setPlayerCount = function (count: number) {
    isGameConsistent.value = true
    playerCount.value = count
  }

  const generatePlayerOrders = function () {
    const sourceArray: number[] = []
    const shufledArray: number[] = []

    for (let i = 1; i <= playerCount.value; i++) {
      sourceArray.push(i)
    }

    for (let i = playerCount.value; i > 0; i--) {
      const randomIndex = getRandomNumber(i)
      shufledArray.push(sourceArray.splice(randomIndex, 1)[0])
    }

    playerOrders.value = shufledArray
  }

  const selectActionCard = function () {
    if (actionCards.value.length === 0) {
      actionCards.value = populateActionCards()
    }

    const randomIndex = getRandomNumber(actionCards.value.length)
    const selectedCard = actionCards.value.splice(randomIndex, 1)[0]
    selectedActionCard.value = selectedCard
  }

  const resetGame = function () {
    isGameConsistent.value = false
    playerCount.value = 0
    playerOrders.value = []
    selectedActionCard.value = null
    actionCards.value = populateActionCards()
  }

  return {
    isGameConsistent,
    playerOrders,
    selectedActionCard,
    actionCardCount,
    setPlayerCount,
    generatePlayerOrders,
    selectActionCard,
    resetGame,
  }
})
