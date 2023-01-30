# **ColorSelect** Component

для выбора цвета

## Описание

- отображается цвет в hex
- использован react-color
- есть компонент с выбором шаблонов цветов
- можно выбирать цвет и насыщенность

## Props

- value = { цвет в hex, например: #ff00ff }
- onChange = { функция по типу (value) => value }

## Используемые компоненты

- ColorSelect - основный компонент
- DropdownPanel - выпадающая панель, HOC
- CustomColorPicker - компонет, содержащий все цветовые компоненты
- SwatchColorSquares - компонент с scroll для выбора шаблонов цвета
- Main - компонент-контейнер
- CustomHue - компонент для выбора цвета
- CustomSaturation - компонент для выбора насыщенности

## for FIX

- устанавливать каждый раз положение палитр CustomHue и CustomSaturation при открытии панели
- нет плавности scroll в SwatchColorSquares
- при изменении CustomHue возвращаются некорректные данные
