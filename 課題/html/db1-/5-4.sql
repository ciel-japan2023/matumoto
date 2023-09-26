select em_m_item.item_name,sum(item_qty) FROM em_t_stock_item join em_m_item
ON em_t_stock_item.item_cd = em_m_item.item_cd
group by em_t_stock_item.item_cd
order by sum(item_qty) DESC;