export function orderStatusFunction(arr: any) {
   arr.forEach((order: any) => {
      switch (order.orderStatus) {
         case 'DoOrder':
            order.color = 'info'
            order.statusText = 'Выполнение заказа'
            break
         case 'DoReservation':
            order.color = 'info'
            order.statusText = 'Выполнение резервации'
            break
         case 'DoSetAutoReject':
            order.color = 'info'
            order.statusText = 'Установление авто отклонении'
            break
         case 'SetAutoRejectSuccess':
            order.color = 'info'
            order.statusText = 'Установление успешного авто отклонении'
            break
         case 'ChoicePaymentType':
            order.color = 'info'
            order.statusText = 'Выбор способа оплаты'
            break
         case 'DoCloseP10FormRejectOrder':
            order.color = 'info'
            order.statusText = 'Успешное закрытие П10 формы и отклонение заказа'
            break
         case 'DoExpiredTimeOrder':
            order.color = 'info'
            order.statusText = 'Указание истекшего времени заказа'
            break
         case 'DoTicketReject':
            order.color = 'info'
            order.statusText = 'Отклонение билета'
            break
         case 'DoPaymentSystem':
            order.color = 'info'
            order.statusText = 'Выполнение связки с платежной системой'
            break
         case 'PaymentSystemSuccess':
            order.color = 'info'
            order.statusText = 'Успешное выполнение платежа с платежной системой'
            break
         case 'DoExpressStatus':
            order.color = 'info'
            order.statusText = 'Выполнение статуса Express'
            break
         case 'DoRegisterTicket':
            order.color = 'info'
            order.statusText = 'Регистрация билета'
            break
         case 'FinishedOrderCloseP10Form':
            order.color = 'info'
            order.statusText = 'Законченный заказ с закрытой формой P10'
            break
         case 'FinishedOrderExpiredTime':
            order.color = 'info'
            order.statusText = 'завершение заказа с истечением ожидании оплаты до 15 минут'
            break
         case 'RevertConfirmPaymentSuccess':
            order.color = 'info'
            order.statusText = 'Успешное восстановление подтверждение оплаты'
            break
         case 'DoOrderTicketReturn':
            order.color = 'info'
            order.statusText = 'Выполнение возврата билета в заказе'
            break
         case 'DoOrderValidationError':
            order.color = 'danger'
            order.statusText = 'Ошибка Выполнении заказа'
            break
         case 'ReservationError':
            order.color = 'danger'
            order.statusText = 'Ошыбка резервации'
            break
         case 'SetAutoRejectError':
            order.color = 'danger'
            order.statusText = 'Ошибка при Установлении авто отклонения'
            break
         case 'TicketRejectError':
            order.color = 'danger'
            order.statusText = 'Ошибка при отклонении билета'
            break
         case 'PaymentSystemError':
            order.color = 'danger'
            order.statusText = 'Ошибка при выполнении платежа с платежной системой'
            break
         case 'PaymentErrorProxy':
            order.color = 'danger'
            order.statusText = 'Ошибка при оплаты Proxy'
            break
         case 'ExpressStatusError':
            order.color = 'danger'
            order.statusText = 'Express Статус Ошибка'
            break
         case 'RegisterTicketError':
            order.color = 'danger'
            order.statusText = 'Ошыбка при регистрации билета'
            break
         case 'OrderRevertConformPaymentFail':
            order.color = 'danger'
            order.statusText = 'Ошыбка при возврат заказа подтверждение оплаты'
            break
         case 'FinishedOrderReservationFail':
            order.color = 'danger'
            order.statusText = 'Завершение заказа с ошибкой резервации'
            break
         case 'FinishedOrderSetAutoRejectFail':
            order.color = 'info'
            order.statusText = 'Завершение заказа с ошибкой при установление авто отклонения'
            break
         case 'FinishedOrderPaymentFail':
            order.color = 'danger'
            order.statusText = 'Завершение заказа с ошибкой при выполнение платежа'
            break
         case 'FinishedOrderConfirmPaymentProxyFail':
            order.color = 'danger'
            order.statusText = 'Завершение заказа с ошибкой при возврате подтвержденной оплаты'
            break
         case 'RevertConfirmPaymentError':
            order.color = 'danger'
            order.statusText = 'Ошыбка при восстановлении подтверждение оплаты'
            break
         case 'OrderTicketReturnError':
            order.color = 'danger'
            order.statusText = 'Ошыбка при выполнении возврата билета в заказе'
            break
         case 'ReturnOrderFromProxy':
            order.color = 'danger'
            order.statusText = 'Возврат заказа из Proxy'
            break
         case 'ReturnSomeTicketsFromProxy':
            order.color = 'danger'
            order.statusText = 'Возврат некоторых билетов из Proxy'
            break
         case 'ManualCanceledP10Order':
            order.color = 'danger'
            order.statusText = 'Заказ P10 отменен вручную'
            break
         case 'BlockExternalApiOrder':
            order.color = 'danger'
            order.statusText = 'Заблокировать внешний Api заказа'
            break
         case 'RollbackOrder':
            order.color = 'danger'
            order.statusText = 'Откат заказа'
            break
         case 'ReservationSuccess':
            order.color = 'success'
            order.statusText = 'Успешная резервация'
            break
         case 'TicketRejectSuccess':
            order.color = 'success'
            order.statusText = 'Успешное отклонение билета'
            break
         case 'DoPaymentProxy':
            order.color = 'success'
            order.statusText = 'Выполнение оплаты Proxy'
            break
         case 'PaymentSuccessProxy':
            order.color = 'success'
            order.statusText = 'Успешная оплата Proxy'
            break
         case 'ExpressStatusSuccess':
            order.color = 'success'
            order.statusText = 'Express Статус Успешен'
            break
         case 'RegisterTicketSuccess':
            order.color = 'success'
            order.statusText = 'Успешная регистрация билета'
            break
         case 'OrderRevertConfirmPaymentOk':
            order.color = 'success'
            order.statusText = 'Успешный возврат заказа подтверждение оплаты'
            break
         case 'FinishedSuccessOrder':
            order.color = 'success'
            order.statusText = 'Завершенный Успешный Заказ'
            break
         case 'OrderTicketReturnSuccess':
            order.color = 'success'
            order.statusText = 'Успешное выполнение возврата билета в заказе'
            break
         case 'PaymentEntityCreated':
            order.color = 'primary'
            order.statusText = 'Платежный объект создан'
            break
         case 'FinishedOrderWithUnknownStatus':
            order.color = 'secondary'
            order.statusText = 'Завершение заказа с процессом неизвестного статуса'
            break
         case 'UnBlockExternalApiOrder':
            order.color = 'secondary'
            order.statusText = 'Завершение заказа с процессом неизвестного статуса'
            break
      }
   })
}
