select em_m_location.location_name,em_m_code.code_name,sum(em_t_stock_item.item_qty)
FROM em_t_stock_item 
inner join em_m_location ON em_m_location.location_cd = em_t_stock_item.location_cd 
inner join em_m_item on em_t_stock_item.item_cd = em_m_item.item_cd 
inner join em_m_code ON em_m_code.code_value = em_m_item.item_type 
and em_m_code.code_type = 'item_type'
group by em_m_item.item_type,em_m_location.location_cd,em_m_code.code_name
having 30 <= sum(em_t_stock_item.item_qty)
ORDER BY em_m_location.location_cd asc,em_m_item.item_type asc,SUM(item_qty);